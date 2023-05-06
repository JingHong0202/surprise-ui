#!/usr/bin/env node
import { Command } from 'commander';
import { setDefault } from './base';
const program = new Command();
setDefault(program);
import packageJSON from './package.json' assert { type: 'json' };

program
  .name(packageJSON.name)
  .description('CLI to some surprise-ui utilities')
  .version(`${packageJSON.name}: ${packageJSON.version}`);

program
  .command('component <action>')
  .description(
    'Component init generate command action\r action: gen(创建组件) sync(组件同步导出)'
  )
  .action(async action => {
    if (action === 'gen') {
      const { gen } = await import('./command/generate');
      return gen();
    } else if (action === 'sync') {
      const { sync } = await import('./command/sync');
      return sync();
    }
  });

program.parse();
