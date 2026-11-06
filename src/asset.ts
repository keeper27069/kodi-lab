/** Absolute base URL of the published page (works at any path, hash routing). */
export const ASSET_BASE = typeof window === 'undefined' ? '/' : new URL('.', window.location.href.split('#')[0]).href;
