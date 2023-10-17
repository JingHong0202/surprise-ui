import prettier from 'prettier/standalone';
import prettierHtml from 'prettier/parser-html';
import parsetTypeScript from 'prettier/parser-typescript';
/*@__NO_SIDE_EFFECTS__*/
export const formattedVueTemplate = (code: string, args?: object) => {
  return prettier.format(code, {
    parser: 'vue',
    plugins: [prettierHtml],
    ...args
  });
};
/*@__NO_SIDE_EFFECTS__*/
export const formattedTS = (code: string, args?: object) => {
  return prettier.format(code, {
    parser: 'typescript',
    plugins: [parsetTypeScript],
    ...args
  });
};
