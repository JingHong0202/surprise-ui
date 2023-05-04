import prettier from 'prettier/standalone';
import prettierHtml from 'prettier/parser-html';
import parsetTypeScript from 'prettier/parser-typescript';

export const formattedVueTemplate = (code: string) => {
  return prettier.format(code, {
    parser: 'vue',
    plugins: [prettierHtml]
  });
};

export const formattedTS = (code: string) => {
  return prettier.format(code, {
    parser: 'typescript',
    plugins: [parsetTypeScript]
  });
};
