/**
 * Lightweight code editor in the VS Code look (replaces @uiw/react-codemirror):
 * a transparent textarea over a highlighted copy, with line numbers and the
 * current line lit like in a real editor. Tab inserts two spaces.
 */
import { useRef, useState, type KeyboardEvent } from 'react';
import { highlightLine, type CodeLang } from '../engine/code/highlight';

interface Props {
  value: string;
  height?: string;
  onChange?: (v: string) => void;
  className?: string;
  extensions?: unknown[];
  [k: string]: unknown;
}

export default function CodeMirror({ value, onChange, className, extensions }: Props) {
  const lang = ((extensions ?? []).find((e) => typeof e === 'string') as CodeLang | undefined) ?? 'html';
  const ta = useRef<HTMLTextAreaElement>(null);
  const [line, setLine] = useState(-1);
  const lines = value.split('\n');

  const caret = () => {
    const el = ta.current;
    if (!el) return;
    setLine(el.value.slice(0, el.selectionStart).split('\n').length - 1);
  };
  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Tab') return;
    e.preventDefault();
    const el = e.currentTarget;
    const s = el.selectionStart;
    const v = el.value.slice(0, s) + '  ' + el.value.slice(el.selectionEnd);
    onChange?.(v);
    requestAnimationFrame(() => {
      el.selectionStart = el.selectionEnd = s + 2;
    });
  };

  return (
    <div className={`${className ?? ''} cm-editor vsc`}>
      <div className="vsc__gutter" aria-hidden>
        {lines.map((_, i) => (
          <div key={i} className={i === line ? 'is-cur' : ''}>
            {i + 1}
          </div>
        ))}
      </div>
      <div className="vsc__body">
        <pre className="vsc__hl" aria-hidden>
          {lines.map((l, i) => (
            <div key={i} className={`vsc__line ${i === line ? 'is-cur' : ''}`}>
              {l.length ? highlightLine(l, lang) : ' '}
            </div>
          ))}
        </pre>
        <textarea
          ref={ta}
          className="vsc__ta"
          value={value}
          spellCheck={false}
          wrap="off"
          autoCapitalize="off"
          autoCorrect="off"
          onChange={(e) => {
            onChange?.(e.target.value);
            caret();
          }}
          onKeyDown={onKey}
          onKeyUp={caret}
          onClick={caret}
          onFocus={caret}
          onBlur={() => setLine(-1)}
          onScroll={(e) => {
            // the outer editor scrolls; the textarea itself never does
            e.currentTarget.scrollLeft = 0;
            e.currentTarget.scrollTop = 0;
          }}
        />
      </div>
    </div>
  );
}
export const html = () => 'html';
export const css = () => 'css';
export const javascript = (_?: unknown) => 'js';
export const tokyoNight = null;
export const EditorView = { lineWrapping: null };
