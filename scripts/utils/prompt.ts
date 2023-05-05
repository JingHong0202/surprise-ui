import inquirer from 'inquirer';

export async function confirm(message: string, callback: () => void) {
  try {
    const { is } = await inquirer.prompt([
      {
        type: 'confirm',
        message,
        name: 'is'
      }
    ]);
    if (is) callback();
  } catch (error) {
    throw Error(String(error));
  }
}
