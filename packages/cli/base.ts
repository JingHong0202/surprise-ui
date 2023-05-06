import type { Command } from 'commander';

export const setDefault = (program: Command) => {
  program
    .command('code <action>')
    .description('code utilities\r action: format')
    .action(async action => {
      if (action === 'gen') {
        const { gen } = await import('./command/generate');
        return gen();
      } else if (action === 'sync') {
        const { sync } = await import('./command/sync');
        return sync();
      }
    });
};
