/**
 * Shared bits of the Kids course (Kelajak ko'nikmalari, ages 8–10).
 * Every lesson follows the programme's 30-minute shape:
 * warm-up (0–3) · hook (3–8) · puzzles (8–22) · your turn (22–27) · wrap-up (27–30).
 */
type L = 'ru' | 'uz' | 'en';

export const ROUTE = [
  'Разминка ¦ Razminka ¦ Warm-up',
  "Загадка ¦ Topishmoq ¦ The hook",
  'Задачи ¦ Masalalar ¦ Puzzles',
  "Сделай сам ¦ O'zing bajar ¦ Your turn",
  'Итог ¦ Xulosa ¦ Wrap-up',
];

const SEC: Record<string, [string, string, string]> = {
  comp: ['Компьютерная грамотность', 'Kompyuter savodxonligi', 'Computer literacy'],
  cyber: ['Кибербезопасность', 'Kiberxavfsizlik', 'Cybersecurity'],
  logic: ['Логика', 'Mantiq', 'Logic'],
  algo: ['Алгоритмы', 'Algoritmlar', 'Algorithms'],
  blockly: ['Blockly', 'Blockly', 'Blockly'],
  reserve: ['Запасная тема', 'Zaxira mavzu', 'Reserve topic'],
};

/** "Логика · общая тема 3" in three languages */
export function kick(sec: keyof typeof SEC, kind: 'g' | 't', n: number) {
  const [ru, uz, en] = SEC[sec];
  const k = kind === 'g' ? ['общая тема', 'umumiy mavzu', 'general topic'] : ['техническая тема', 'texnik mavzu', 'technical topic'];
  return `${ru} · ${k[0]} ${n} ¦ ${uz} · ${k[1]} ${n} ¦ ${en} · ${k[2]} ${n}`;
}

export const HOME = 'Дома ¦ Uyda ¦ At home';

/** One HTML snippet per language, joined the way code fields expect */
export const tri = (f: (l: L) => string) => `${f('ru')} ¦ ${f('uz')} ¦ ${f('en')}`;

/** Coddy's maze: rows of '#' wall, '.' floor, 'F' finish; `path` = visited "r,c"; `at` = Coddy's cell */
export const MAZE_CSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif}
.mz{display:grid;gap:4px;padding:10px;border-radius:16px;background:#16181f}
.mz i{width:74px;height:74px;border-radius:10px;display:grid;place-items:center;font-size:44px;font-style:normal}
.mz i.w{background:#5b6170}.mz i.f{background:#f4f5f7}.mz i.p{background:#ffd9cc}.mz i.bad{background:#ffb3b3}
.side{display:flex;gap:30px;align-items:center}
.prog{display:flex;flex-direction:column;gap:8px}
.prog span{padding:10px 16px;border-radius:12px;background:#fa4f28;color:#fff;font:800 22px 'JetBrains Mono',monospace;box-shadow:inset 0 -4px 0 #d53a17}
.prog span.r{background:#5b6ef5;box-shadow:inset 0 -4px 0 #3e4fd1}.prog span.i{background:#0fa38e;box-shadow:inset 0 -4px 0 #0b7d6d}
.prog span.now{outline:4px solid #ffd400}.prog span.bad{background:#d80000}
.prog span.in{margin-left:28px}.prog span.in2{margin-left:56px}`;
export function maze(rows: string[], at: [number, number] | null, path: string[] = [], bad: string[] = [], prog: { t: string; c?: string }[] = []) {
  const cells = rows
    .map((r, y) =>
      r
        .split('')
        .map((ch, x) => {
          const k = `${y},${x}`;
          const cls = bad.includes(k) ? 'bad' : ch === '#' ? 'w' : path.includes(k) ? 'p' : 'f';
          const icon = at && at[0] === y && at[1] === x ? '🤖' : ch === 'F' ? '⭐' : '';
          return `<i class="${cls}">${icon}</i>`;
        })
        .join(''),
    )
    .join('');
  const p = prog.length ? `<div class="prog">${prog.map((b) => `<span class="${b.c ?? ''}">${b.t}</span>`).join('')}</div>` : '';
  return `<div class="wrap"><div class="side"><div class="mz" style="grid-template-columns:repeat(${rows[0].length},74px)">${cells}</div>${p}</div></div>`;
}

/** Base CSS for the picture previews (grids, cards, maps) */
export const KCSS = `.wrap{display:grid;place-items:center;height:100%;font-family:Inter,system-ui,sans-serif;color:#16181f}
.grid{display:grid;gap:6px}
.cell{width:64px;height:64px;border-radius:12px;background:#fff;border:3px solid #e1e4ea;display:grid;place-items:center;font-size:34px;font-weight:800}
.cell.on{border-color:#fa4f28;background:#fff1ec}
.cell.ok{border-color:#0cd678;background:#e9fbf2}
.cell.bad{border-color:#d80000;background:#ffecec}
.cap{margin-top:14px;font-size:22px;font-weight:700;text-align:center}
.row{display:flex;gap:14px;align-items:center;justify-content:center;flex-wrap:wrap}
.card{padding:14px 18px;border-radius:16px;background:#fff;border:3px solid #e1e4ea;font-size:22px;font-weight:700;text-align:center}
.card.on{border-color:#fa4f28;background:#fff1ec}
.card.ok{border-color:#0cd678;background:#e9fbf2}
.big{font-size:64px;line-height:1}`;

/** "Запасная тема · Логика" for the reserve technical lessons */
export function rkick(sec: Exclude<keyof typeof SEC, 'reserve'>) {
  const [ru, uz, en] = SEC[sec];
  return `Запасная тема · ${ru} ¦ Zaxira mavzu · ${uz} ¦ Reserve topic · ${en}`;
}
