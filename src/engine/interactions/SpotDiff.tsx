import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useUi } from '@/i18n';
import { useSceneState } from '../scene/hooks';

interface Props {
  /** Rows of emoji separated by spaces, e.g. "☀️ 🌳 🏠" */
  left: string[];
  right: string[];
  leftLabel?: ReactNode;
  rightLabel?: ReactNode;
  name?: string;
  onAllFound?: () => void;
}

const cells = (rows: string[]) => rows.map((r) => r.trim().split(/\s+/));

/** Two pictures side by side; click a cell that differs (on either picture) to circle it. */
export function SpotDiff({ left, right, leftLabel, rightLabel, name = 'spot', onAllFound }: Props) {
  const ui = useUi();
  const L = cells(left);
  const R = cells(right);
  const diffs = L.flatMap((row, y) => row.flatMap((c, x) => (R[y]?.[x] !== c ? [`${y},${x}`] : [])));
  const [found, setFound] = useSceneState<string[]>(`${name}:found`, []);
  const [miss, setMiss] = useState<string | null>(null);

  const tap = (k: string) => {
    if (diffs.includes(k)) {
      if (found.includes(k)) return;
      const next = [...found, k];
      setFound(next);
      if (next.length === diffs.length) onAllFound?.();
    } else {
      setMiss(k);
      setTimeout(() => setMiss((m) => (m === k ? null : m)), 450);
    }
  };
  const showAll = () => {
    setFound(diffs);
    onAllFound?.();
  };
  const cols = L[0]?.length ?? 1;

  const pic = (grid: string[][], side: string, label?: ReactNode) => (
    <div className="spot__side">
      {label && <div className="spot__label">{label}</div>}
      <div className="spot__pic" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {grid.flatMap((row, y) =>
          row.map((c, x) => {
            const k = `${y},${x}`;
            const isFound = found.includes(k);
            return (
              <motion.button
                key={`${side}${k}`}
                className={`spot__cell ${isFound ? 'is-found' : ''} ${miss === k ? 'is-miss' : ''}`}
                onClick={() => tap(k)}
                animate={miss === k ? { x: [0, -6, 6, -3, 0] } : isFound ? { scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 0.35 }}
              >
                {c}
              </motion.button>
            );
          }),
        )}
      </div>
    </div>
  );

  return (
    <div className="spot">
      <div className="spot__pics">
        {pic(L, 'l', leftLabel)}
        {pic(R, 'r', rightLabel)}
      </div>
      <div className="sort__footer">
        <span className="sort__score">{found.length === diffs.length ? `🎉 ${ui.allDone}` : ui.spotFound(found.length, diffs.length)}</span>
        <div className="spot__dots">
          {diffs.map((d) => (
            <span key={d} className={found.includes(d) ? 'is-on' : ''} />
          ))}
        </div>
        <button className="btn" onClick={showAll} disabled={found.length === diffs.length}>
          {ui.reveal}
        </button>
      </div>
    </div>
  );
}
