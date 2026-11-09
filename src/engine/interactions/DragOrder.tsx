import { useMemo, useRef, useState, type ReactNode, type PointerEvent as RPointerEvent } from 'react';
import { motion } from 'framer-motion';
import { useUi } from '@/i18n';
import { useStageScale } from '../player/context';
import { useSceneState } from '../scene/hooks';

interface Props {
  /** Steps in the CORRECT order */
  items: ReactNode[];
  name?: string;
  onChecked?: (allCorrect: boolean) => void;
}

/** Same shuffle every time (so the mentor's screen matches the students'), never the solved order */
function shuffled(n: number): number[] {
  const idx = Array.from({ length: n }, (_, i) => i);
  let seed = n * 7919 + 17;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  if (idx.every((v, i) => v === i)) idx.reverse();
  return idx;
}

/**
 * Put the steps in the right order. Drag a card onto a numbered slot, or click a card
 * to drop it into the next free slot (click a placed card to send it back).
 */
export function DragOrder({ items, name = 'order', onChecked }: Props) {
  const ui = useUi();
  const scale = useStageScale();
  const n = items.length;
  const trayOrder = useMemo(() => shuffled(n), [n]);
  const [slots, setSlots] = useSceneState<(number | null)[]>(`${name}:slots`, () => Array(n).fill(null));
  const [checked, setChecked] = useSceneState<boolean>(`${name}:checked`, false);
  const [, force] = useState(0);
  const drag = useRef<{ item: number; from: number | null; x0: number; y0: number; el: HTMLElement; moved: boolean } | null>(null);

  const placed = new Set(slots.filter((v): v is number => v != null));
  const put = (item: number, slot: number | null, from: number | null) => {
    setSlots((prev) => {
      const next = [...prev];
      if (from != null) next[from] = null;
      if (slot == null) return next;
      const occupant = next[slot];
      next[slot] = item;
      // Swap when moving between slots; otherwise the occupant goes back to the tray
      if (occupant != null && from != null) next[from] = occupant;
      return next;
    });
    setChecked(false);
  };

  const onDown = (e: RPointerEvent<HTMLElement>, item: number, from: number | null) => {
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    drag.current = { item, from, x0: e.clientX, y0: e.clientY, el, moved: false };
  };
  const onMove = (e: RPointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = (e.clientX - d.x0) / scale;
    const dy = (e.clientY - d.y0) / scale;
    if (!d.moved && Math.hypot(dx, dy) > 6) d.moved = true;
    if (d.moved) {
      d.el.style.transform = `translate(${dx}px, ${dy}px) rotate(1.5deg) scale(1.03)`;
      d.el.style.zIndex = '50';
      d.el.style.pointerEvents = 'none';
    }
  };
  const onUp = (e: RPointerEvent<HTMLElement>) => {
    const d = drag.current;
    drag.current = null;
    if (!d) return;
    d.el.style.transform = '';
    d.el.style.zIndex = '';
    d.el.style.pointerEvents = '';
    if (!d.moved) {
      // Click: tray → first free slot, slot → back to tray
      if (d.from != null) put(d.item, null, d.from);
      else {
        const free = slots.indexOf(null);
        if (free >= 0) put(d.item, free, null);
      }
      force((x) => x + 1);
      return;
    }
    const hit = document.elementsFromPoint(e.clientX, e.clientY).find((el) => (el as HTMLElement).dataset?.slot != null) as HTMLElement | undefined;
    const slot = hit?.dataset.slot;
    if (slot === 'tray' || slot == null) {
      if (d.from != null && slot === 'tray') put(d.item, null, d.from);
      return;
    }
    put(d.item, Number(slot), d.from);
  };

  const check = () => {
    setChecked(true);
    onChecked?.(slots.every((v, i) => v === i));
  };
  const reveal = () => {
    setSlots(Array.from({ length: n }, (_, i) => i));
    setChecked(true);
    onChecked?.(true);
  };
  const good = slots.filter((v, i) => v === i).length;
  const full = slots.every((v) => v != null);

  const card = (item: number, from: number | null) => {
    const state = checked && from != null ? (item === from ? 'is-correct' : 'is-wrong') : '';
    return (
      <motion.div
        layout
        key={item}
        className={`order__card ${state}`}
        onPointerDown={(e) => onDown(e, item, from)}
        onPointerMove={onMove}
        onPointerUp={onUp}
        role="button"
        tabIndex={0}
        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      >
        <span className="order__grip">⠿</span>
        <span className="order__text">{items[item]}</span>
        {state === 'is-correct' && <span className="order__mark">✓</span>}
        {state === 'is-wrong' && <span className="order__mark">✗</span>}
      </motion.div>
    );
  };

  return (
    <div className="order">
      <div className="order__cols">
        <div className="order__tray" data-slot="tray">
          <div className="order__head">🧩 {ui.orderHint}</div>
          {trayOrder.filter((i) => !placed.has(i)).map((i) => card(i, null))}
        </div>
        <div className="order__slots">
          {slots.map((v, i) => (
            <div key={i} className={`order__slot ${v == null ? 'is-empty' : ''}`} data-slot={i}>
              <span className="order__num">{i + 1}</span>
              {v != null ? card(v, i) : <span className="order__ph" />}
            </div>
          ))}
        </div>
      </div>
      <div className="sort__footer">
        <button className="btn btn--accent" onClick={check} disabled={!full}>
          {ui.check}
        </button>
        <button className="btn" onClick={reveal}>
          {ui.reveal}
        </button>
        {checked && (
          <motion.span className="sort__score" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            {good === n ? `🎉 ${ui.allDone}` : `${good} / ${n}`}
          </motion.span>
        )}
      </div>
    </div>
  );
}
