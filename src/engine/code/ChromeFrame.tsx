import type { ReactNode } from 'react';

/** Chrome-like browser window around a page preview: tab strip, window buttons, address bar */
export function ChromeFrame({ children, tab = 'index.html', url = 'index.html', className = '' }: { children: ReactNode; tab?: string; url?: string; className?: string }) {
  return (
    <div className={`chrome ${className}`}>
      <div className="chrome__strip">
        <span className="chrome__tab">
          <i />
          <span className="chrome__tabname">{tab}</span>
          <span className="chrome__x">×</span>
        </span>
        <span className="chrome__plus">+</span>
        <span className="chrome__win" aria-hidden>
          <span>—</span>
          <span>▢</span>
          <span>✕</span>
        </span>
      </div>
      <div className="chrome__bar">
        <span className="chrome__nav" aria-hidden>
          ‹ ›
        </span>
        <span className="chrome__url">
          <i />
          {url}
        </span>
      </div>
      <div className="chrome__page">{children}</div>
    </div>
  );
}
