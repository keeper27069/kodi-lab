import type { Locale } from '@engine/types';

/** The five sections of the Kids course (Kelajak ko'nikmalari), as in the programme. */
export interface KidsSection {
  id: string;
  icon: string;
  title: Record<Locale, string>;
  /** inclusive number ranges of the main topics */
  g: [number, number];
  t: [number, number];
  /** reserve technical topics of this section */
  reserveT: number[];
  weeks: number;
}

export const KIDS_SECTIONS: KidsSection[] = [
  { id: 'comp', icon: '💻', title: { ru: 'Компьютерная грамотность', uz: 'Kompyuter savodxonligi', en: 'Computer literacy' }, g: [1, 4], t: [1, 4], reserveT: [25, 26], weeks: 4 },
  { id: 'cyber', icon: '🛡️', title: { ru: 'Кибербезопасность', uz: 'Kiberxavfsizlik', en: 'Cybersecurity' }, g: [5, 8], t: [5, 8], reserveT: [27, 28], weeks: 4 },
  { id: 'logic', icon: '🧩', title: { ru: 'Логика', uz: 'Mantiq', en: 'Logic' }, g: [9, 16], t: [9, 16], reserveT: [29, 30], weeks: 8 },
  { id: 'algo', icon: '🔁', title: { ru: 'Алгоритмы', uz: 'Algoritmlar', en: 'Algorithms' }, g: [17, 20], t: [17, 20], reserveT: [31, 32], weeks: 4 },
  { id: 'blockly', icon: '🧱', title: { ru: 'Программирование на Blockly', uz: "Blockly'da dasturlash", en: 'Programming in Blockly' }, g: [21, 24], t: [21, 24], reserveT: [33, 34], weeks: 4 },
];
/** General reserve topics (not tied to a section) */
export const KIDS_RESERVE_G: [number, number] = [25, 30];

export const kidsSectionOf = (kind: 'general' | 'technical', n: number) =>
  KIDS_SECTIONS.find((s) => {
    const [a, b] = kind === 'general' ? s.g : s.t;
    return (n >= a && n <= b) || (kind === 'technical' && s.reserveT.includes(n));
  });
