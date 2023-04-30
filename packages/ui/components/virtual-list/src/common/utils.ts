export function binarySearch(
  searchList: any[],
  findVal: number,
  type: 'vertical' | 'horizonetal'
): number {
  let start = 0,
    end = searchList.length - 1,
    tempIndex = null;
  const attr = type === 'vertical' ? '__bottom' : '__right';
  while (start <= end) {
    const mid = start + ((end - start) >> 1);
    if (searchList[mid][attr] > findVal) {
      if (tempIndex === null || tempIndex > mid) {
        tempIndex = mid;
      }
      end = mid - 1;
    } else if (searchList[mid][attr] < findVal) {
      start = mid + 1;
    } else if (searchList[mid][attr] === findVal) {
      return searchList[mid].__index + 1;
    }
  }
  return tempIndex!;
}
