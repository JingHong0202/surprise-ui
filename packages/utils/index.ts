export const formattedTemplate = async (code: string) => {
  const prettier = await import('prettier/standalone');
  const prettierHtml = await import('prettier/parser-html');

  // emits an event  when the transformation is completed
  return prettier.format(code, {
    parser: 'vue',
    plugins: [prettierHtml],
    htmlWhitespaceSensitivity: 'ignore'
  });
};
