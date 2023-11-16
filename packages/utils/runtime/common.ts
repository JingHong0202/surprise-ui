// 防抖
/*@__NO_SIDE_EFFECTS__*/
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
/*@__NO_SIDE_EFFECTS__*/
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

// 节流
/*@__NO_SIDE_EFFECTS__*/
export function getProtoType(arg: any) {
  return Object.prototype.toString.call(arg);
}
