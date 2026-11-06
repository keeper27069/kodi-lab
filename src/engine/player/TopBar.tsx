import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOCALES } from '../types';
import { LOCALE_SHORT, useLocale, useUi } from '@/i18n';
import { usePlayer } from './context';

const I = {
  back: <path d="M15 5l-7 7 7 7" />,
  book: <path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v15H5.5A1.5 1.5 0 0 1 4 17.5zM20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5c.8 0 1.5-.7 1.5-1.5z" />,
  lamp: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />,
  pause: <path d="M9 5v14M15 5v14" />,
  play: <path d="M8 5l11 7-11 7z" />,
  more: <path d="M5 12h.01M12 12h.01M19 12h.01" />,
};
const Icon = ({ d, w = 2.4 }: { d: keyof typeof I; w?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {I[d]}
  </svg>
);

/**
 * LMS-style header in one row: ‹ back · section label · "4/17" · hint lamp ·
 * Kodi's voice (pause/play) · ⋯ menu — and a segmented progress bar under it.
 */
export function TopBar({ onOverview, presenterUrl, voiceOn, onVoice }: { onOverview: () => void; presenterUrl: string; voiceOn: boolean; onVoice: () => void }) {
  const p = usePlayer();
  const ui = useUi();
  const locale = useLocale();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const total = p.lesson.scenes.length;
  const stage = p.lesson.scenes[p.sceneIndex]?.stage ?? 0;

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('pointerdown', close);
    return () => window.removeEventListener('pointerdown', close);
  }, [open]);

  const run = (fn: () => void) => () => {
    fn();
    setOpen(false);
  };

  return (
    <header className="topbar">
      <div className="topbar__row">
        <Link to={`/${locale}/${p.meta.module}`} className="tb-back" title={ui.backToCatalog} aria-label={ui.backToCatalog}>
          <Icon d="back" w={2.8} />
        </Link>
        <span className="tb-section">
          <Icon d="book" w={2} />
          {p.content.route[stage] ?? ui.modules[p.meta.module]}
        </span>
        <button className="tb-count" onClick={onOverview} title={`${ui.overview} (O)`}>
          {p.sceneIndex + 1}
          <span>/{total}</span>
        </button>
        <div className="topbar__right">
          <button className={`tb-btn ${p.hintOpen ? 'is-on' : ''}`} onClick={p.toggleHint} title={`${ui.hint} (H)`} aria-label={ui.hint}>
            <Icon d="lamp" w={2} />
          </button>
          <button className="tb-btn" onClick={onVoice} title={voiceOn ? ui.pause : ui.play} aria-label={voiceOn ? ui.pause : ui.play}>
            <Icon d={voiceOn ? 'pause' : 'play'} w={voiceOn ? 3 : 2.2} />
          </button>
          <div className="tb-menu" ref={menuRef}>
            <button className="tb-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="menu">
              <Icon d="more" w={3.4} />
            </button>
            {open && (
              <div className="tb-menu__pop" role="menu">
                <div className="tb-langs">
                  {LOCALES.map((l) => (
                    <button
                      key={l}
                      className={`tb-lang ${l === locale ? 'is-active' : ''}`}
                      onClick={run(() => nav(`/${l}/${p.meta.module}/${p.meta.slug}/${p.sceneIndex + 1}`, { replace: true }))}
                    >
                      {LOCALE_SHORT[l]}
                    </button>
                  ))}
                </div>
                <button className="tb-item" onClick={run(p.resetScene)}>
                  ↺ {ui.reset} <kbd>R</kbd>
                </button>
                <button className="tb-item" onClick={run(() => window.open(`#${presenterUrl}`, `presenter-${p.lesson.id}`, 'width=1100,height=800'))}>
                  📝 {ui.presenter} <kbd>P</kbd>
                </button>
                <button className="tb-item" onClick={run(onOverview)}>
                  🗂️ {ui.overview} <kbd>O</kbd>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="tb-segs" aria-hidden>
        {p.lesson.scenes.map((_, i) => (
          <i key={i} className={i <= p.sceneIndex ? 'is-done' : ''} />
        ))}
      </div>
    </header>
  );
}
