import type { Command } from 'commander';

export const setDefault = (program: Command) => {
  program
    .command('code <action>')
    .description('code utilities\r action: format')
    .action(async action => {
      if (action === 'format') {
        const { formatCode } = await import('./command/format');
        return formatCode();
      }
    });
};
