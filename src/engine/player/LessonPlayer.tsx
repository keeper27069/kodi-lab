import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { LessonDefinition, LessonMeta, Locale } from '../types';
import { PlayerContext, SceneContext, type PlayerApi } from './context';
import { clearStorePrefix, readStore, writeStore } from './store';
import { openChannel, type SyncMsg } from './sync';
import { Stage } from './Stage';
import { TopBar } from './TopBar';
import { SceneOverview } from './SceneOverview';
import { NotesOverlay } from './NotesOverlay';
import { Kodi, playGlitch } from './Kodi';
import { useUi } from '@/i18n';

const VOICE_KEY = 'kodi:voice';
const readVoice = () => {
  try {
    return localStorage.getItem(VOICE_KEY) !== 'off';
  } catch {
    return true;
  }
};

interface Props {
  lesson: LessonDefinition;
  meta: LessonMeta;
  locale: Locale;
  initialScene: number;
  onSceneChange: (scene: number) => void;
  presenterUrl: string;
}

function isTypingTarget(t: EventTarget | null) {
  const el = t as HTMLElement | null;
  if (!el) return false;
  return (
    el.tagName === 'INPUT' ||
    el.tagName === 'TEXTAREA' ||
    el.isContentEditable ||
    !!el.closest?.('.cm-editor')
  );
}

export function LessonPlayer({ lesson, meta, locale, initialScene, onSceneChange, presenterUrl }: Props) {
  const total = lesson.scenes.length;
  const clampScene = (n: number) => Math.max(0, Math.min(total - 1, n));
  const [sceneIndex, setSceneIndex] = useState(() => clampScene(initialScene));
  const [step, setStepState] = useState(0);
  const [resetKeys, setResetKeys] = useState<Record<string, number>>({});
  const [hintOpen, setHintOpen] = useState(false);
  const [overview, setOverview] = useState(false);
  const [notes, setNotes] = useState(false);
  const [direction, setDirection] = useState(1);
  const numberHandler = useRef<((n: number) => void) | null>(null);
  const ui = useUi();
  const [voiceOn, setVoiceOn] = useState(readVoice);
  const toggleVoice = () =>
    setVoiceOn((v) => {
      try {
        localStorage.setItem(VOICE_KEY, v ? 'off' : 'on');
      } catch {
        /* private mode */
      }
      if (v && typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
      return !v;
    });
  const firstScene = useRef(true);
  useEffect(() => {
    if (firstScene.current) {
      firstScene.current = false;
      return;
    }
    if (voiceOn) playGlitch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneIndex]);

  const content = lesson.content[locale];
  const scene = lesson.scenes[sceneIndex];
  const stepsOf = (i: number) => Math.max(1, lesson.scenes[i]?.steps ?? 1);

  // Remember last position per lesson
  const posKey = `${lesson.id}:__pos`;
  useEffect(() => {
    writeStore(posKey, { scene: sceneIndex, step });
  }, [posKey, sceneIndex, step]);
  useEffect(() => {
    const saved = readStore<{ scene: number; step: number }>(posKey);
    if (saved && saved.scene === sceneIndex) setStepState(Math.min(saved.step, stepsOf(sceneIndex) - 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = useCallback(
    (s: number, st = 0) => {
      const ns = clampScene(s);
      setDirection(ns >= sceneIndex ? 1 : -1);
      setSceneIndex(ns);
      setStepState(Math.max(0, Math.min(st, stepsOf(ns) - 1)));
      setHintOpen(false);
      numberHandler.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sceneIndex, total],
  );

  const next = useCallback(() => {
    if (step < stepsOf(sceneIndex) - 1) setStepState(step + 1);
    else if (sceneIndex < total - 1) goTo(sceneIndex + 1, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, sceneIndex, total, goTo]);

  const prev = useCallback(() => {
    if (step > 0) setStepState(step - 1);
    else if (sceneIndex > 0) goTo(sceneIndex - 1, stepsOf(sceneIndex - 1) - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, sceneIndex, goTo]);

  const setStep = useCallback(
    (n: number) => setStepState(Math.max(0, Math.min(n, stepsOf(sceneIndex) - 1))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sceneIndex],
  );

  const resetScene = useCallback(() => {
    clearStorePrefix(`${lesson.id}:${scene.key}:`);
    setResetKeys((r) => ({ ...r, [scene.key]: (r[scene.key] ?? 0) + 1 }));
    setStepState(0);
  }, [lesson.id, scene.key]);

  const resetLesson = useCallback(() => {
    clearStorePrefix(`${lesson.id}:`);
    setResetKeys((r) => {
      const n: Record<string, number> = {};
      lesson.scenes.forEach((s) => (n[s.key] = (r[s.key] ?? 0) + 1));
      return n;
    });
    goTo(0, 0);
  }, [lesson, goTo]);

  // URL sync
  useEffect(() => {
    onSceneChange(sceneIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneIndex]);

  // Presenter window sync
  const chan = useRef<ReturnType<typeof openChannel> | null>(null);
  const handlers = useRef({ next, prev, goTo, sceneIndex, step });
  handlers.current = { next, prev, goTo, sceneIndex, step };
  useEffect(() => {
    const c = openChannel(lesson.id, (m: SyncMsg) => {
      const h = handlers.current;
      if (m.t === 'cmd') (m.cmd === 'next' ? h.next : h.prev)();
      else if (m.t === 'goto') h.goTo(m.scene, m.step ?? 0);
      else if (m.t === 'hello') c.post({ t: 'state', scene: h.sceneIndex, step: h.step });
    });
    chan.current = c;
    return () => c.close();
  }, [lesson.id]);
  useEffect(() => {
    chan.current?.post({ t: 'state', scene: sceneIndex, step });
  }, [sceneIndex, step]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        (document.activeElement as HTMLElement | null)?.blur?.();
        setOverview(false);
        return;
      }
      if (isTypingTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') {
        e.preventDefault();
        next();
      } else if (k === 'ArrowLeft' || k === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (/^[1-9]$/.test(k) && numberHandler.current) {
        numberHandler.current(Number(k));
      } else {
        switch (k.toLowerCase()) {
          case 'r':
            resetScene();
            break;
          case 'h':
            setHintOpen((v) => !v);
            break;
          case 'o':
            setOverview((v) => !v);
            break;
          case 'n':
            setNotes((v) => !v);
            break;
          case 'p':
            window.open(`#${presenterUrl}`, `presenter-${lesson.id}`, 'width=1100,height=800');
            break;
          case 'f':
            if (document.fullscreenElement) document.exitFullscreen?.();
            else document.documentElement.requestFullscreen?.().catch(() => {});
            break;
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, resetScene, presenterUrl, lesson.id]);

  const api: PlayerApi = useMemo(
    () => ({
      lesson,
      meta,
      content,
      sceneIndex,
      step,
      next,
      prev,
      goTo,
      setStep,
      resetScene,
      resetLesson,
      hintOpen,
      toggleHint: () => setHintOpen((v) => !v),
      setNumberHandler: (h) => {
        numberHandler.current = h;
      },
    }),
    [lesson, meta, content, sceneIndex, step, next, prev, goTo, setStep, resetScene, resetLesson, hintOpen],
  );

  const text = content.scenes[scene.key];
  const SceneComp = scene.Component;
  const rk = resetKeys[scene.key] ?? 0;

  return (
    <PlayerContext.Provider value={api}>
      <Stage module={meta.module}>
        <div className="player" data-scene={sceneIndex} data-step={step} data-steps={stepsOf(sceneIndex)} data-total={total}>
          <TopBar onOverview={() => setOverview(true)} presenterUrl={presenterUrl} voiceOn={voiceOn} onVoice={toggleVoice} />
          <div className="scene-area">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={`${scene.key}-${rk}-${locale}`}
                className="scene-motion"
                custom={direction}
                data-dir={direction}
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: [1, 1, 0.85, 0], x: [0, -10, 8, 0] }}
                transition={{ duration: 0.2, ease: 'linear' }}
              >
                <SceneContext.Provider
                  value={{ key: scene.key, index: sceneIndex, storeKey: `${lesson.id}:${scene.key}`, text }}
                >
                  <SceneComp />
                </SceneContext.Provider>
              </motion.div>
            </AnimatePresence>
          </div>
          <footer className="lms-foot">
            <div className="lms-foot__row">
              <button className="lms-btn lms-btn--back" onClick={prev} disabled={sceneIndex === 0 && step === 0}>
                <span aria-hidden>←</span> {ui.prev}
              </button>
              <button
                className="lms-btn lms-btn--next"
                onClick={next}
                disabled={sceneIndex === total - 1 && step === stepsOf(sceneIndex) - 1}
              >
                {ui.next}
              </button>
            </div>
          </footer>
          <Kodi locale={locale} cue={`${scene.key}-${step}-${rk}`} voiceOn={voiceOn} />

          {overview && <SceneOverview onClose={() => setOverview(false)} />}
          {notes && <NotesOverlay onClose={() => setNotes(false)} />}
        </div>
      </Stage>
    </PlayerContext.Provider>
  );
}
