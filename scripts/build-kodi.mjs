// Single-page build of the Kodi edition: esbuild bundle inlined into dist/index.html,
// emoji SVGs copied next to it. Usage: node scripts/build-kodi.mjs [--dev]
import { build } from '/opt/npm-tools/node_modules/esbuild/lib/main.js';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const outArg = process.argv.find((a) => a.startsWith('--out='));
const OUT = outArg ? path.resolve(outArg.slice(6)) : path.join(ROOT, 'dist');
const NM = '/opt/npm-tools/node_modules';
const dev = process.argv.includes('--dev');
const req = createRequire(NM + '/x.js');

const resolveTs = (p) => {
  for (const ext of ['.ts', '.tsx', '/index.ts', '/index.tsx']) if (existsSync(p + ext)) return p + ext;
  return p;
};
const V = (f) => path.join(SRC, 'vendor', f);

const plugin = {
  name: 'kodi',
  setup(b) {
    b.onResolve({ filter: /^@engine(\/.*)?$/ }, (a) => ({ path: resolveTs(path.join(SRC, 'engine', a.path.replace(/^@engine/, '') || 'index')) }));
    b.onResolve({ filter: /^@emoji\/jsx(-dev)?-runtime$/ }, (a) => ({ path: resolveTs(path.join(SRC, 'emoji', a.path.slice(7))) }));
    b.onResolve({ filter: /^@\// }, (a) => ({ path: resolveTs(path.join(SRC, a.path.slice(2))) }));
    b.onResolve({ filter: /^framer-motion$/ }, () => ({ path: V('motion.tsx') }));
    b.onResolve({ filter: /^react-router-dom$/ }, () => ({ path: V('router.tsx') }));
    b.onResolve({ filter: /^(@uiw\/react-codemirror|@codemirror\/.*|@uiw\/codemirror-theme-tokyo-night)$/ }, () => ({ path: V('codemirror.tsx') }));
    b.onResolve({ filter: /\?raw$/ }, (a) => ({ path: path.resolve(a.resolveDir, a.path.replace(/\?raw$/, '')), namespace: 'raw' }));
    b.onLoad({ filter: /.*/, namespace: 'raw' }, (a) => ({ contents: readFileSync(a.path, 'utf8'), loader: 'text' }));
    b.onResolve({ filter: /^react(-dom)?(\/.*)?$/ }, (a) => ({ path: req.resolve(a.path) }));
  },
};

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const r = await build({
  entryPoints: [path.join(SRC, 'main.tsx')],
  bundle: true,
  write: false,
  outdir: OUT,
  format: 'iife',
  target: 'es2020',
  jsx: 'automatic',
  jsxImportSource: '@emoji',
  loader: { '.svg': 'dataurl' },
  define: { 'import.meta.env.DEV': 'false', 'process.env.NODE_ENV': dev ? '"development"' : '"production"' },
  minify: !dev,
  legalComments: 'none',
  plugins: [plugin],
  logLevel: 'warning',
});
const js = r.outputFiles.find((f) => f.path.endsWith('.js')).text;
const css = r.outputFiles.find((f) => f.path.endsWith('.css'))?.text ?? '';
const favicon = readFileSync(path.join(ROOT, 'public/favicon.svg'), 'utf8');
const safe = (s) => s.replace(/<\/(script|style)/gi, '<\\/$1');
writeFileSync(
  path.join(OUT, 'index.html'),
  `<!doctype html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#FA4F28">
<title>Kodi Lab</title>
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(favicon)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap">
<style>${safe(css)}</style>
</head>
<body>
<div id="root"></div>
<script>${safe(js)}</script>
</body>
</html>
`,
);
// Artifact variant (only with --out): the host adds doctype/head/body itself
if (outArg) writeFileSync(
  path.join(OUT, 'artifact.html'),
  `<title>Kodi Lab</title>
<meta name="theme-color" content="#FA4F28">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap">
<style>html,body,#root{height:100%}body{background:#f4f5f7;color:#16181f}${safe(css)}</style>
<div id="root"></div>
<script>${safe(js)}</script>
`,
);
cpSync(path.join(ROOT, 'public/emoji'), path.join(OUT, 'emoji'), { recursive: true });
console.log('built', (Buffer.byteLength(js) / 1e6).toFixed(2), 'MB js', (Buffer.byteLength(css) / 1e3).toFixed(0), 'KB css');
