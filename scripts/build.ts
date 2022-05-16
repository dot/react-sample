import { build } from 'esbuild';

build({
  target: "es2016",
  platform: "browser",
  entryPoints: ['src/index.tsx'],
  outdir: "build",
  bundle: true,
  minify: false,
  sourcemap: true,
}).catch(() => process.exit(1))

export {}