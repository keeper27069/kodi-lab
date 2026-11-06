/**
 * Minimal hash router with the react-router-dom API this app uses.
 * Paths live after "#", so the site works as a single static page anywhere.
 */
import { Children, createContext, isValidElement, useContext, useEffect, useState, type ReactElement, type ReactNode, type AnchorHTMLAttributes } from 'react';

const readPath = () => {
  const h = window.location.hash.replace(/^#/, '');
  return h.startsWith('/') ? h : '/';
};

const LocCtx = createContext<{ path: string; nav: (to: string, o?: { replace?: boolean }) => void }>({ path: '/', nav: () => {} });
const ParamsCtx = createContext<Record<string, string | undefined>>({});

export function BrowserRouter({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readPath);
  useEffect(() => {
    const on = () => setPath(readPath());
    window.addEventListener('hashchange', on);
    window.addEventListener('popstate', on);
    return () => {
      window.removeEventListener('hashchange', on);
      window.removeEventListener('popstate', on);
    };
  }, []);
  const nav = (to: string, o: { replace?: boolean } = {}) => {
    const url = `${window.location.pathname}${window.location.search}#${to}`;
    try {
      if (o.replace) window.history.replaceState({}, '', url);
      else window.history.pushState({}, '', url);
    } catch {
      window.location.hash = to;
    }
    setPath(to);
    window.scrollTo?.(0, 0);
  };
  return <LocCtx.Provider value={{ path, nav }}>{children}</LocCtx.Provider>;
}

function match(pattern: string, path: string) {
  if (pattern === '*') return {};
  const p = pattern.split('/').filter(Boolean);
  const s = path.split('/').filter(Boolean);
  const params: Record<string, string> = {};
  if (s.length > p.length) return null;
  for (let i = 0; i < p.length; i++) {
    const seg = p[i];
    const opt = seg.endsWith('?');
    const name = seg.replace(/^:/, '').replace(/\?$/, '');
    if (s[i] === undefined) {
      if (opt) continue;
      return null;
    }
    if (seg.startsWith(':')) params[name] = decodeURIComponent(s[i]);
    else if (seg !== s[i]) return null;
  }
  return params;
}

export function Routes({ children }: { children: ReactNode }) {
  const { path } = useContext(LocCtx);
  for (const ch of Children.toArray(children)) {
    if (!isValidElement(ch)) continue;
    const pr = (ch as ReactElement<{ path: string; element: ReactNode }>).props;
    const m = match(pr.path, path);
    if (m) return <ParamsCtx.Provider value={m}>{pr.element}</ParamsCtx.Provider>;
  }
  return null;
}
export const Route = (_: { path: string; element: ReactNode }) => null;
export const useParams = <T extends Record<string, string | undefined> = Record<string, string | undefined>>() => useContext(ParamsCtx) as T;
export const useNavigate = () => useContext(LocCtx).nav;
export const useLocation = () => ({ pathname: useContext(LocCtx).path });
export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const { nav } = useContext(LocCtx);
  useEffect(() => nav(to, { replace }), [to]);
  return null;
}
export function Link({ to, children, onClick, ...rest }: { to: string; children?: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { nav } = useContext(LocCtx);
  return (
    <a
      href={`#${to}`}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey) return;
        e.preventDefault();
        nav(to);
      }}
    >
      {children}
    </a>
  );
}
