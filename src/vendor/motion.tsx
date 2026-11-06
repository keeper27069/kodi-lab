/**
 * Small framer-motion replacement built on the Web Animations API.
 * Covers what this app uses: motion.<tag> with initial / animate / exit /
 * transition (tween, spring, keyframe arrays, repeat), whileHover / whileTap,
 * `layout` (FLIP), AnimatePresence (incl. mode="wait"), MotionConfig and
 * useReducedMotion. React renders the final style; WAAPI plays the way there.
 */
import {
  Children,
  createContext,
  createElement,
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';

type Val = number | string;
type Target = Record<string, Val | Val[] | undefined>;
interface Transition {
  type?: 'spring' | 'tween' | string;
  duration?: number;
  delay?: number;
  ease?: string | number[];
  repeat?: number;
  repeatType?: string;
  stiffness?: number;
  damping?: number;
  [k: string]: unknown;
}

const reduceQuery = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
export const useReducedMotion = () => !!reduceQuery?.matches;
export function MotionConfig({ children }: { children: ReactNode; reducedMotion?: string }) {
  return <>{children}</>;
}

/* ───────── presence ───────── */
interface Presence {
  exiting: boolean;
  initial: boolean;
  done: () => void;
}
const PresenceCtx = createContext<Presence | null>(null);

type Keyed = ReactElement & { key: string | number | null };
const keyOf = (c: Keyed) => String(c.key ?? '__');

export function AnimatePresence({ children, mode, initial = true }: { children?: ReactNode; mode?: 'wait' | 'sync' | 'popLayout'; initial?: boolean; custom?: unknown }) {
  const kids = Children.toArray(children).filter(isValidElement) as Keyed[];
  const first = useRef(true);
  const [, force] = useState(0);
  // rendered list: [element, exiting]
  const shown = useRef<{ el: Keyed; exiting: boolean }[]>(kids.map((el) => ({ el, exiting: false })));

  const curKeys = new Set(kids.map(keyOf));
  const prev = shown.current;
  let list: { el: Keyed; exiting: boolean }[];
  if (mode === 'wait') {
    const live = prev.find((p) => !p.exiting);
    const leaving = prev.filter((p) => p.exiting);
    if (leaving.length) {
      list = leaving; // wait until they are gone
      if (live && !curKeys.has(keyOf(live.el))) list = [...leaving, { el: live.el, exiting: true }];
      else if (live) list = [...leaving];
    } else if (live && !curKeys.has(keyOf(live.el))) {
      list = [{ el: live.el, exiting: true }];
    } else {
      list = kids.map((el) => ({ el, exiting: false }));
    }
  } else {
    const prevKeys = new Set(prev.map((p) => keyOf(p.el)));
    list = [];
    const curMap = new Map(kids.map((k) => [keyOf(k), k]));
    // keep order: previous items (updated or exiting), then new ones in place
    for (const p of prev) {
      const k = keyOf(p.el);
      if (curMap.has(k)) list.push({ el: curMap.get(k)!, exiting: false });
      else list.push({ el: p.el, exiting: true });
    }
    kids.forEach((el, i) => {
      if (!prevKeys.has(keyOf(el))) {
        // insert after the previous sibling from kids
        const before = kids[i - 1];
        const at = before ? list.findIndex((x) => keyOf(x.el) === keyOf(before)) + 1 : 0;
        list.splice(at, 0, { el, exiting: false });
      }
    });
  }
  shown.current = list;
  const isFirst = first.current;
  useEffect(() => {
    first.current = false;
  });

  const remove = (k: string) => {
    const before = shown.current.length;
    shown.current = shown.current.filter((x) => !(x.exiting && keyOf(x.el) === k));
    if (shown.current.length !== before) force((n) => n + 1);
  };

  return (
    <>
      {list.map(({ el, exiting }) => {
        const k = keyOf(el);
        return (
          <PresenceChild key={k} exiting={exiting} initial={isFirst ? initial : true} done={() => remove(k)}>
            {el}
          </PresenceChild>
        );
      })}
    </>
  );
}

/** Provides presence to one child; removes it anyway if nothing reports the exit */
function PresenceChild({ exiting, initial, done, children }: { exiting: boolean; initial: boolean; done: () => void; children: ReactNode }) {
  useEffect(() => {
    if (!exiting) return;
    const t = window.setTimeout(done, 900);
    return () => window.clearTimeout(t);
  }, [exiting]);
  return <PresenceCtx.Provider value={{ exiting, initial, done }}>{children}</PresenceCtx.Provider>;
}

/* ───────── value helpers ───────── */
const TF = ['x', 'y', 'scale', 'scaleX', 'scaleY', 'rotate', 'rotateY'];
const px = (v: Val) => (typeof v === 'number' ? `${v}px` : v);

function lerp(a: Val, b: Val, t: number): Val {
  if (typeof a === 'number' && typeof b === 'number') return a + (b - a) * t;
  const ma = String(a).match(/^(-?[\d.]+)(.*)$/);
  const mb = String(b).match(/^(-?[\d.]+)(.*)$/);
  if (ma && mb && ma[2] === mb[2]) return `${+ma[1] + (+mb[1] - +ma[1]) * t}${ma[2]}`;
  return t < 1 ? a : b;
}
/** value of a (possibly keyframed) property at keyframe j of n */
function sample(v: Val | Val[], j: number, n: number): Val {
  if (!Array.isArray(v)) return v;
  if (v.length === 1 || n === 1) return v[v.length - 1];
  const pos = (j / (n - 1)) * (v.length - 1);
  const i = Math.floor(pos);
  if (i >= v.length - 1) return v[v.length - 1];
  return lerp(v[i], v[i + 1], pos - i);
}
const lastOf = (v: Val | Val[]) => (Array.isArray(v) ? v[v.length - 1] : v);
const DEF: Record<string, Val> = { x: 0, y: 0, scale: 1, scaleX: 1, scaleY: 1, rotate: 0, rotateY: 0, opacity: 1 };

function transformOf(vals: Record<string, Val>, keys: string[]) {
  const t: string[] = [];
  if (keys.includes('x') || keys.includes('y')) t.push(`translate(${px(vals.x ?? 0)}, ${px(vals.y ?? 0)})`);
  if (keys.includes('scale')) t.push(`scale(${vals.scale ?? 1})`);
  if (keys.includes('scaleX')) t.push(`scaleX(${vals.scaleX ?? 1})`);
  if (keys.includes('scaleY')) t.push(`scaleY(${vals.scaleY ?? 1})`);
  if (keys.includes('rotate')) t.push(`rotate(${typeof vals.rotate === 'number' ? vals.rotate + 'deg' : vals.rotate ?? '0deg'})`);
  if (keys.includes('rotateY')) t.push(`rotateY(${typeof vals.rotateY === 'number' ? vals.rotateY + 'deg' : vals.rotateY ?? '0deg'})`);
  return t.join(' ');
}

/** Flat CSS from a frame of values */
function cssOf(vals: Record<string, Val>, tfKeys: string[], isSvgShape: boolean): Record<string, string> {
  const o: Record<string, string> = {};
  for (const [k, v] of Object.entries(vals)) {
    if (TF.includes(k)) continue;
    if (k === 'pathLength') {
      o.strokeDashoffset = String(1 - Number(v));
      continue;
    }
    o[k] = typeof v === 'number' && !['opacity', 'zIndex'].includes(k) ? `${v}px` : String(v);
  }
  if (tfKeys.length) o.transform = transformOf(vals, tfKeys);
  if (isSvgShape && o.transform) o.transformBox = 'fill-box';
  return o;
}

const EASE: Record<string, string> = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
  easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
};
function timing(tr: Transition | undefined, frames: number) {
  const t = tr ?? {};
  const spring = t.type === 'spring' || (!t.duration && !t.ease && frames <= 2 && t.type !== 'tween');
  let duration = (t.duration ?? (spring ? 0.45 : 0.3)) * 1000;
  let easing = Array.isArray(t.ease) ? `cubic-bezier(${t.ease.join(',')})` : t.ease ? EASE[t.ease] ?? 'ease' : spring ? 'cubic-bezier(0.22, 1, 0.36, 1)' : 'cubic-bezier(0.25, 0.1, 0.25, 1)';
  if (spring && t.stiffness && t.stiffness > 200) duration = Math.min(duration, 320);
  return {
    duration,
    delay: (t.delay ?? 0) * 1000,
    easing,
    iterations: t.repeat === Infinity ? Infinity : (t.repeat ?? 0) + 1,
    direction: (t.repeatType === 'reverse' || t.repeatType === 'mirror' ? 'alternate' : 'normal') as PlaybackDirection,
  };
}

/** Builds WAAPI keyframes from `from` (resting values) to `to` (may contain arrays) */
function frames(from: Record<string, Val>, to: Target, isSvgShape: boolean) {
  const keys = Object.keys(to).filter((k) => to[k] !== undefined);
  const n = Math.max(2, ...keys.map((k) => (Array.isArray(to[k]) ? (to[k] as Val[]).length : 2)));
  const tfKeys = keys.filter((k) => TF.includes(k)).concat(Object.keys(from).filter((k) => TF.includes(k) && !keys.includes(k)));
  const out: Keyframe[] = [];
  for (let j = 0; j < n; j++) {
    const vals: Record<string, Val> = {};
    for (const k of keys) {
      const v = to[k] as Val | Val[];
      if (Array.isArray(v) && v.length > 1) vals[k] = sample(v, j, n);
      else vals[k] = j === 0 ? from[k] ?? DEF[k] ?? lastOf(v) : lerp(from[k] ?? DEF[k] ?? lastOf(v), lastOf(v), j / (n - 1));
    }
    for (const k of tfKeys) if (!(k in vals)) vals[k] = from[k] ?? DEF[k];
    out.push(cssOf(vals, tfKeys, isSvgShape) as Keyframe);
  }
  return out;
}

const finalOf = (t: Target | undefined) => {
  const o: Record<string, Val> = {};
  if (t) for (const [k, v] of Object.entries(t)) if (v !== undefined) o[k] = lastOf(v);
  return o;
};

const SVG = new Set(['svg', 'g', 'path', 'circle', 'rect', 'line', 'ellipse', 'polygon', 'polyline', 'text']);
const DROP = new Set(['initial', 'animate', 'exit', 'transition', 'whileHover', 'whileTap', 'whileInView', 'layout', 'layoutId', 'custom', 'variants', 'onAnimationComplete', 'drag']);

interface MotionProps {
  initial?: Target | false;
  animate?: Target;
  exit?: Target;
  transition?: Transition;
  whileHover?: Target;
  whileTap?: Target;
  layout?: boolean;
  style?: Record<string, unknown>;
  [k: string]: unknown;
}

function makeMotion(tag: string) {
  const isSvgShape = SVG.has(tag) && tag !== 'svg';
  const Comp = forwardRef<Element, MotionProps>(function Motion(props, ref) {
    const presence = useContext(PresenceCtx);
    const el = useRef<HTMLElement | null>(null);
    const rest = useRef<Record<string, Val>>({});
    const animKey = JSON.stringify(props.animate ?? null);
    const lastKey = useRef<string | null>(null);
    const mounted = useRef(false);
    const hover = useRef(false);
    const box = useRef<DOMRect | null>(null);
    const exitStarted = useRef(false);

    // hover/tap overlays
    const [over, setOver] = useState<Target | null>(null);

    const target: Target = { ...(props.animate ?? {}), ...(over ?? {}) };
    const fin = finalOf(target);
    const tfKeys = Object.keys(fin).filter((k) => TF.includes(k));
    const baseStyle = (props.style ?? {}) as Record<string, unknown>;
    const reduce = useReducedMotion();

    // style rendered by React = final values
    const style: Record<string, unknown> = { ...baseStyle, ...cssOf(fin, tfKeys, isSvgShape) };
    const pathLength = 'pathLength' in fin;
    if (pathLength) {
      style.strokeDasharray = '1';
    }
    // before mount with initial: render initial values so there is no flash
    const init = props.initial;
    const wantsInitial = init !== false && init && (presence ? presence.initial : true);
    if (!mounted.current && wantsInitial && !reduce) {
      const i = finalOf(init as Target);
      const keys = [...new Set([...Object.keys(i), ...tfKeys])].filter((k) => TF.includes(k));
      Object.assign(style, cssOf({ ...fin, ...i }, keys, isSvgShape));
    }

    const play = (from: Record<string, Val>, to: Target, tr: Transition | undefined, onDone?: () => void) => {
      const node = el.current;
      if (!node || !node.animate || reduce) {
        onDone?.();
        return;
      }
      const kf = frames(from, to, isSvgShape);
      const t = timing(tr, kf.length);
      try {
        const a = node.animate(kf, { ...t, fill: onDone ? 'forwards' : 'backwards' });
        if (onDone) a.onfinish = () => onDone();
      } catch {
        onDone?.();
      }
    };

    /** current resting values (what is on screen now) */
    const current = (): Record<string, Val> => {
      const node = el.current;
      const r = { ...rest.current };
      if (node && node.getAnimations && node.getAnimations().length) {
        const cs = getComputedStyle(node);
        for (const k of Object.keys(r)) {
          if (k === 'opacity') r[k] = +cs.opacity;
          else if (['left', 'top', 'width', 'height'].includes(k)) {
            const parent = node.offsetParent as HTMLElement | null;
            const v = parseFloat((cs as unknown as Record<string, string>)[k]);
            if (typeof rest.current[k] === 'string' && String(rest.current[k]).endsWith('%') && parent) {
              const size = k === 'left' || k === 'width' ? parent.clientWidth : parent.clientHeight;
              r[k] = `${size ? (v / size) * 100 : 0}%`;
            }
          }
        }
        node.getAnimations().forEach((a) => a.cancel());
      }
      return r;
    };

    useLayoutEffect(() => {
      const node = el.current;
      if (!mounted.current) {
        mounted.current = true;
        lastKey.current = animKey;
        if (wantsInitial && node) {
          // first paint used the initial values; settle the DOM on the final ones
          const keys = [...new Set([...Object.keys(finalOf(init as Target)), ...tfKeys])];
          const settled = cssOf(fin, tfKeys, isSvgShape);
          for (const k of keys) {
            const cssKey = k === 'pathLength' ? 'strokeDashoffset' : TF.includes(k) ? 'transform' : k;
            const v = (settled as Record<string, string>)[cssKey] ?? (baseStyle[cssKey] as string | undefined) ?? '';
            (node.style as unknown as Record<string, string>)[cssKey] = v;
          }
        }
        if (wantsInitial && props.animate) {
          play({ ...finalOf(props.animate), ...finalOf(init as Target) }, props.animate, props.transition);
        }
        rest.current = finalOf(target);
        if (props.layout && node) box.current = node.getBoundingClientRect();
        return;
      }
      if (lastKey.current !== animKey) {
        lastKey.current = animKey;
        const from = current();
        if (props.animate) play(from, props.animate, props.transition);
        rest.current = finalOf(target);
      }
      if (props.layout && node) {
        const b = node.getBoundingClientRect();
        const o = box.current;
        box.current = b;
        if (o && (Math.abs(o.left - b.left) > 1 || Math.abs(o.top - b.top) > 1) && !reduce) {
          node.animate([{ translate: `${o.left - b.left}px ${o.top - b.top}px` }, { translate: '0 0' }], { duration: 280, easing: 'cubic-bezier(0.22,1,0.36,1)' });
        }
      }
    });

    // exit
    useLayoutEffect(() => {
      if (!presence?.exiting || exitStarted.current) return;
      exitStarted.current = true;
      if (!props.exit) {
        presence.done();
        return;
      }
      const tr = (props.exit as { transition?: Transition }).transition ?? { ...(props.transition ?? {}), delay: 0, duration: Math.min(props.transition?.duration ?? 0.2, 0.25), repeat: 0 };
      const ex = { ...props.exit };
      delete (ex as Record<string, unknown>).transition;
      play(current(), ex, tr, () => presence.done());
    }, [presence?.exiting]);

    const hostProps: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(props)) if (!DROP.has(k) && k !== 'style') hostProps[k] = v;
    hostProps.style = style;
    if (pathLength) hostProps.pathLength = 1;
    if (props.whileHover) {
      hostProps.onPointerEnter = (e: unknown) => {
        hover.current = true;
        setOver(props.whileHover!);
        (props.onPointerEnter as ((e: unknown) => void) | undefined)?.(e);
      };
      hostProps.onPointerLeave = (e: unknown) => {
        hover.current = false;
        setOver(null);
        (props.onPointerLeave as ((e: unknown) => void) | undefined)?.(e);
      };
    }
    if (props.whileTap) {
      hostProps.onPointerDown = (e: unknown) => {
        setOver({ ...(hover.current ? props.whileHover : {}), ...props.whileTap });
        (props.onPointerDown as ((e: unknown) => void) | undefined)?.(e);
      };
      hostProps.onPointerUp = (e: unknown) => {
        setOver(hover.current && props.whileHover ? props.whileHover : null);
        (props.onPointerUp as ((e: unknown) => void) | undefined)?.(e);
      };
    }
    hostProps.ref = (n: HTMLElement | null) => {
      el.current = n;
      if (typeof ref === 'function') ref(n);
      else if (ref) (ref as { current: unknown }).current = n;
    };
    // children of a motion element are not part of this presence
    return <PresenceCtx.Provider value={null}>{createElement(tag, hostProps)}</PresenceCtx.Provider>;
  });
  return Comp;
}

const cache: Record<string, ReturnType<typeof makeMotion>> = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const motion: Record<string, any> = new Proxy(
  {},
  {
    get(_, tag: string) {
      return (cache[tag] ??= makeMotion(tag));
    },
  },
);
