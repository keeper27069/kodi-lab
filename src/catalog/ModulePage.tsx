import { Link, Navigate, useParams } from 'react-router-dom';
import type { ModuleId } from '@engine/types';
import { useLocale, useUi } from '@/i18n';
import { MODULES, lessonsOf } from '@/lessons/registry';
import { Header } from './Header';
import { LessonCard } from './LessonCard';
import { KIDS_RESERVE_G, KIDS_SECTIONS } from '@/lessons/kids-sections';

export function ModulePage() {
  const { module } = useParams();
  const locale = useLocale();
  const ui = useUi();
  if (!MODULES.includes(module as ModuleId)) return <Navigate to={`/${locale}`} replace />;
  const m = module as ModuleId;

  return (
    <div className="catalog" data-module={m}>
      <Header />
      <div className="module-head">
        <Link to={`/${locale}`} className="back">
          ← {ui.backToCatalog}
        </Link>
        <h1>{ui.modules[m]}</h1>
      </div>
      {m === 'kids' ? (
        <KidsModule />
      ) : (
      <div className="module-cols">
        {(['general', 'technical'] as const).map((k) => (
          <section key={k} className="module-col">
            <h2>{k === 'general' ? ui.general : ui.technical}</h2>
            <p className="muted">{k === 'general' ? ui.generalHint : ui.technicalHint}</p>
            <div className="module-list">
              {lessonsOf(m, k).map((l) => (
                <LessonCard key={l.id} l={l} />
              ))}
            </div>
          </section>
        ))}
      </div>
      )}
    </div>
  );
}

/** Kids course: five sections, each with general + technical topics, then the reserve */
function KidsModule() {
  const ui = useUi();
  const locale = useLocale();
  const inRange = (n: number, [a, b]: [number, number]) => n >= a && n <= b;
  const gen = lessonsOf('kids', 'general');
  const tech = lessonsOf('kids', 'technical');
  return (
    <div className="kids">
      <p className="kids__age">{ui.kids.age}</p>
      {KIDS_SECTIONS.map((sec, i) => (
        <section key={sec.id} className="kids-sec">
          <h2 className="kids-sec__title">
            <span className="kids-sec__n">{i + 1}</span>
            {sec.icon} {sec.title[locale]}
          </h2>
          <div className="module-cols">
            <section className="module-col">
              <h3>{ui.general}</h3>
              <p className="muted">{ui.kids.generalHint}</p>
              <div className="module-list">
                {gen.filter((l) => inRange(l.number, sec.g)).map((l) => (
                  <LessonCard key={l.id} l={l} />
                ))}
              </div>
            </section>
            <section className="module-col">
              <h3>{ui.technical}</h3>
              <p className="muted">{ui.kids.technicalHint}</p>
              <div className="module-list">
                {tech.filter((l) => inRange(l.number, sec.t)).map((l) => (
                  <LessonCard key={l.id} l={l} />
                ))}
              </div>
            </section>
          </div>
        </section>
      ))}
      <section className="kids-sec kids-sec--reserve">
        <h2 className="kids-sec__title">⭐ {ui.kids.reserve}</h2>
        <p className="muted">{ui.kids.reserveHint}</p>
        <div className="module-cols">
          <section className="module-col">
            <h3>{ui.general}</h3>
            <div className="module-list">
              {gen.filter((l) => inRange(l.number, KIDS_RESERVE_G)).map((l) => (
                <LessonCard key={l.id} l={l} />
              ))}
            </div>
          </section>
          <section className="module-col">
            <h3>{ui.technical}</h3>
            <div className="module-list">
              {tech.filter((l) => KIDS_SECTIONS.some((s) => s.reserveT.includes(l.number))).map((l) => (
                <LessonCard key={l.id} l={l} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
