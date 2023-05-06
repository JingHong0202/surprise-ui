import { defineConfig } from 'tsup';

export default defineConfig(options => {
  return {
    entry: ['./run.ts'],
    splitting: false,
    sourcemap: 'inline',
    clean: true,
    minify: !options.watch,
    outDir: './lib',
    format: 'cjs',
    treeshake: true
  };
});
