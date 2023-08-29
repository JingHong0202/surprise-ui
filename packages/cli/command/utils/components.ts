import fs from 'node:fs';
import { formattedTS } from '@packages/utils';
import defaultFormat from './common';

export function syncComponentFile() {
  const basePath = process.cwd();
  const componentDirs = fs.readdirSync(`${basePath}/packages/ui/components`);
  const write = componentDirs.reduce((accumulator, current) => {
    accumulator +=
      current === 'index.ts' ? '' : `export * from './${current}';`;
    return accumulator;
  }, '');
  fs.writeFileSync(
    `${basePath}/packages/ui/components/index.ts`,
    formattedTS(write, defaultFormat)
  );
}
