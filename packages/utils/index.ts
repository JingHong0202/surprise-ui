import prettier from 'prettier/standalone';
import prettierHtml from 'prettier/parser-html';
import parsetTypeScript from 'prettier/parser-typescript';

export const formattedVueTemplate = (code: string, args?: object) => {
  return prettier.format(code, {
    parser: 'vue',
    plugins: [prettierHtml],
    ...args
  });
};

export const formattedTS = (code: string, args?: object) => {
  return prettier.format(code, {
    parser: 'typescript',
    plugins: [parsetTypeScript],
    ...args
  });
};

// 防抖
export function debounce(
  func: (...args: any[]) => void | Promise<void>,
  wait = 1000
) {
  let timer: NodeJS.Timeout | null;
  return function (this: any, ...args: []) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func && func.apply(this, args);
      timer = null;
    }, wait);
  };
}
// 节流
export function throttle(
  func: (...args: any[]) => void | Promise<void>,
  wait = 1000
) {
  let timer: NodeJS.Timeout | null;
  return function (this: any, ...args: []) {
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
    }, wait);
    func && func.apply(this, args);
  };
}
