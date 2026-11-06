import { motion } from 'framer-motion';

export type BitMood = 'happy' | 'thinking' | 'surprised' | 'worried' | 'proud';

const EYE = '#3EF2E0';

/** Face drawn on Kodi's dark screen, by mood */
export function KodiFace({ mood = 'happy', speaking = false }: { mood?: BitMood; speaking?: boolean }) {
  const eyes =
    mood === 'surprised' ? (
      <>
        <circle cx="78" cy="92" r="11" fill={EYE} />
        <circle cx="122" cy="92" r="11" fill={EYE} />
      </>
    ) : mood === 'thinking' ? (
      <>
        <circle cx="80" cy="94" r="8" fill={EYE} />
        <path d="M110 94 h22" stroke={EYE} strokeWidth="7" strokeLinecap="round" />
      </>
    ) : mood === 'worried' ? (
      <>
        <path d="M68 90 L88 96 M132 90 L112 96" stroke={EYE} strokeWidth="7" strokeLinecap="round" />
      </>
    ) : mood === 'proud' ? (
      <>
        <path d="M68 96 Q78 82 88 96" stroke={EYE} strokeWidth="7" fill="none" strokeLinecap="round" />
        <path d="M112 96 Q122 82 132 96" stroke={EYE} strokeWidth="7" fill="none" strokeLinecap="round" />
      </>
    ) : (
      <>
        <circle cx="80" cy="92" r="9" fill={EYE} />
        <circle cx="120" cy="92" r="9" fill={EYE} />
      </>
    );
  const mouth = speaking ? (
    <ellipse className="kodi-mouth" cx="100" cy="118" rx="12" ry="7" fill={EYE} />
  ) : mood === 'surprised' ? (
    <circle cx="100" cy="120" r="6" fill={EYE} />
  ) : mood === 'worried' ? (
    <path d="M86 124 Q100 114 114 124" stroke={EYE} strokeWidth="6" fill="none" strokeLinecap="round" />
  ) : mood === 'thinking' ? (
    <path d="M90 120 h20" stroke={EYE} strokeWidth="6" strokeLinecap="round" />
  ) : (
    <path d="M84 112 Q100 128 116 112" stroke={EYE} strokeWidth="6" fill="none" strokeLinecap="round" />
  );
  return (
    <g>
      {eyes}
      {mouth}
    </g>
  );
}

/** Kodi's head (used alone in the narrator avatar) */
export function KodiHead({ mood = 'happy', speaking = false }: { mood?: BitMood; speaking?: boolean }) {
  return (
    <g>
      <rect x="22" y="78" width="20" height="44" rx="9" fill="#FA4F28" />
      <rect x="158" y="78" width="20" height="44" rx="9" fill="#FA4F28" />
      <rect x="32" y="34" width="136" height="128" rx="46" fill="#ffffff" stroke="#E4E7EC" strokeWidth="3" />
      <path d="M52 52 Q70 40 98 40" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="6" fill="none" strokeLinecap="round" />
      <rect x="46" y="56" width="108" height="88" rx="30" fill="#D9541F" />
      <rect x="51" y="61" width="98" height="78" rx="26" fill="#14161D" />
      <path d="M60 70 Q72 64 88 64" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="5" fill="none" strokeLinecap="round" />
      <KodiFace mood={mood} speaking={speaking} />
    </g>
  );
}

/** Kodi — the robot guide of every lesson (keeps the old Bit API). */
export function Bit({ size = 220, mood = 'happy', float = true }: { size?: number; mood?: BitMood; float?: boolean }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 220"
      animate={float ? { y: [0, -8, 0] } : undefined}
      transition={float ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut' } : undefined}
      aria-label="Kodi"
      role="img"
    >
      <ellipse cx="100" cy="212" rx="48" ry="7" fill="rgba(20,24,40,.12)" />
      {/* body */}
      <rect x="60" y="150" width="80" height="54" rx="22" fill="#ffffff" stroke="#E4E7EC" strokeWidth="3" />
      <circle cx="100" cy="176" r="9" fill="#FA4F28" />
      <rect x="40" y="158" width="18" height="34" rx="9" fill="#ffffff" stroke="#E4E7EC" strokeWidth="3" />
      <rect x="142" y="158" width="18" height="34" rx="9" fill="#ffffff" stroke="#E4E7EC" strokeWidth="3" />
      <g transform="translate(0,-14)">
        <line x1="100" y1="34" x2="100" y2="18" stroke="#C9CED6" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="14" r="7" fill="#FA4F28" />
        <KodiHead mood={mood} />
      </g>
    </motion.svg>
  );
}
