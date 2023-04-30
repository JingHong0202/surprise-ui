import prettier from 'prettier/standalone';
import prettierHtml from 'prettier/parser-html';
export const formattedTemplate = (code: string) => {
  return prettier.format(code, {
    parser: 'vue',
    plugins: [prettierHtml],
    htmlWhitespaceSensitivity: 'ignore'
  });
};
