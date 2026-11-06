import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useUi } from '@/i18n';
import { useSceneState } from '../scene/hooks';

export interface MissionItem {
  id: string;
  title: ReactNode;
  body?: ReactNode;
  choices: { id: string; label: ReactNode }[];
  correct: string;
  /** Why — shown after checking */
  explain: ReactNode;
}

interface Props {
  items: MissionItem[];
  /** Visual of the project/shield; receives the number of good decisions after checking */
  visual: (good: number, total: number, checked: boolean) => ReactNode;
  name?: string;
  checkLabel?: string;
}

/** Final mission: the chat decides each case; checking shows consequences, wrong choices can be fixed. */
export function FinalMission({ items, visual, name = 'mission', checkLabel }: Props) {
  const ui = useUi();
  const [choice, setChoice] = useSceneState<Record<string, string>>(`${name}:choice`, {});
  const [checked, setChecked] = useSceneState<boolean>(`${name}:checked`, false);
  const good = items.filter((i) => choice[i.id] === i.correct).length;
  const all = items.every((i) => choice[i.id]);

  return (
    <div className="mission">
      <div className="mission__cases">
        {items.map((it, idx) => {
          const c = choice[it.id];
          const state = checked && c ? (c === it.correct ? 'is-correct' : 'is-wrong') : '';
          return (
            <motion.div key={it.id} className={`mission__case ${state}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.06 }}>
              <div className="mission__case-head">
                <span className="mission__num">{idx + 1}</span>
                <div>
                  <b>{it.title}</b>
                  {it.body && <p>{it.body}</p>}
                </div>
              </div>
              <div className="mission__choices">
                {it.choices.map((ch) => (
                  <button
                    key={ch.id}
                    className={`mchoice ${c === ch.id ? 'is-picked' : ''}`}
                    onClick={() => setChoice({ ...choice, [it.id]: ch.id })}
                  >
                    {ch.label}
                  </button>
                ))}
              </div>
              {checked && c && (
                <motion.p className="mission__explain" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                  {c === it.correct ? '✓ ' : '↻ '}
                  {it.explain}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="mission__visual">
        {visual(checked ? good : 0, items.length, checked)}
        <button className="btn btn--accent btn--lg" disabled={!all} onClick={() => setChecked(true)}>
          {checkLabel ?? ui.check}
        </button>
        {checked && (
          <motion.div
            className={`kz-panel ${good === items.length ? 'kz-panel--ok' : 'kz-panel--err'}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <b>{good === items.length ? ui.bravo : `${good} / ${items.length}`}</b>
            <span>{good === items.length ? `${good} / ${items.length} 🎉` : ui.almost}</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
