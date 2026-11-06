import { useEffect, useRef, useState } from 'react';
import type { Locale } from '../types';
import { KodiHead } from '../art/Bit';

/* ───────── voice ───────── */
const LANG: Record<Locale, string> = { ru: 'ru', uz: 'uz', en: 'en' };

function pickVoice(locale: Locale): SpeechSynthesisVoice | null {
  if (typeof speechSynthesis === 'undefined') return null;
  const all = speechSynthesis.getVoices();
  const l = LANG[locale];
  const mine = all.filter((v) => v.lang.toLowerCase().startsWith(l));
  // prefer natural / online voices when there are several
  return mine.find((v) => /natural|online|google/i.test(v.name)) ?? mine[0] ?? null;
}

/** What Kodi reads on the current screen: the step caption, else the screen title */
function screenText(): string {
  const stage = document.querySelector('[data-stage]');
  if (!stage) return '';
  const pick = (sel: string) => {
    const els = stage.querySelectorAll(sel);
    const el = els[els.length - 1] as HTMLElement | undefined;
    if (!el) return '';
    const c = el.cloneNode(true) as HTMLElement;
    c.querySelectorAll('.kit-show__n, img').forEach((n) => n.remove());
    return (c.textContent ?? '').replace(/\s+/g, ' ').trim();
  };
  return pick('.kit-show__say') || pick('.kit-anim__say') || pick('.scene__title');
}

/* ───────── glitch sound (synthesised, no files) ───────── */
let ctx: AudioContext | null = null;
export function playGlitch() {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    ctx ??= new AC();
    const t0 = ctx.currentTime;
    const len = Math.floor(ctx.sampleRate * 0.32);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      const slice = Math.floor(i / (ctx.sampleRate * 0.04)) % 2; // stuttering slices
      d[i] = (Math.random() * 2 - 1) * (slice ? 1 : 0.25) * (1 - i / len);
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.setValueAtTime(2400, t0);
    bp.frequency.exponentialRampToValueAtTime(600, t0 + 0.3);
    bp.Q.value = 1.4;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.09, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.32);
    src.connect(bp).connect(g).connect(ctx.destination);
    src.start(t0);
  } catch {
    /* no audio — fine */
  }
}

/* ───────── narrator ───────── */
export function Kodi({ locale, cue, voiceOn }: { locale: Locale; cue: string; voiceOn: boolean }) {
  const [speaking, setSpeaking] = useState(false);
  const [text, setText] = useState('');
  const timer = useRef<number>(0);
  const supported = typeof speechSynthesis !== 'undefined';

  const speak = (t: string) => {
    if (!supported) return;
    speechSynthesis.cancel();
    setSpeaking(false);
    const v = pickVoice(locale);
    if (!t || !v) return;
    const u = new SpeechSynthesisUtterance(t);
    u.voice = v;
    u.lang = v.lang;
    u.rate = 1;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    speechSynthesis.speak(u);
  };

  // read the new screen shortly after it settles
  useEffect(() => {
    window.clearTimeout(timer.current);
    if (supported) speechSynthesis.cancel();
    setSpeaking(false);
    timer.current = window.setTimeout(() => {
      const t = screenText();
      setText(t);
      if (voiceOn) speak(t);
    }, 650);
    return () => window.clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cue, locale, voiceOn]);

  useEffect(() => () => {
    if (supported) speechSynthesis.cancel();
  }, []);
  // voices load asynchronously in Chrome
  useEffect(() => {
    if (!supported) return;
    const on = () => {};
    speechSynthesis.addEventListener?.('voiceschanged', on);
    return () => speechSynthesis.removeEventListener?.('voiceschanged', on);
  }, [supported]);

  return (
    <button
      className={`kodi ${speaking ? 'is-speaking' : ''}`}
      onClick={() => (speaking ? (speechSynthesis.cancel(), setSpeaking(false)) : speak(text || screenText()))}
      aria-label="Kodi"
      title="Kodi"
    >
      <span className="kodi__wave" />
      <span className="kodi__wave kodi__wave--2" />
      <svg viewBox="10 20 180 160" className="kodi__face" aria-hidden>
        <KodiHead speaking={speaking} />
      </svg>
    </button>
  );
}
