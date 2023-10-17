import { type Coordinate } from 'ol/coordinate';
/*@__NO_SIDE_EFFECTS__*/
export function rotateImg(src: string, rotate: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.setAttribute('crossOrigin', 'Anonymous');
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d')!;
      // 转成正方形比例大小
      canvas.width = Math.max(img.width, img.height);
      canvas.height = Math.max(img.width, img.height);
      context.clearRect(0, 0, canvas.width, canvas.height);
      // 居中旋转
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate((rotate * Math.PI) / 180);
      context.translate(-canvas.width / 2, -canvas.height / 2);
      context.drawImage(
        img,
        canvas.width / 2 - img.width / 2,
        canvas.height / 2 - img.height / 2,
        img.width,
        img.height
      );
      // context.translate(canvas.width / 2, canvas.height / 2);
      // context.rotate((-rotate * Math.PI) / 180);
      // context.translate(-canvas.width / 2, -canvas.height / 2);
      context.restore();
      const base64 = canvas.toDataURL();
      // console.log(base64);
      resolve(base64);
    };
    img.onerror = reject;
  });
}
/*@__NO_SIDE_EFFECTS__*/
export function calcDeg(coord1: Coordinate, coord2: Coordinate) {
  const dy = coord2[1] - coord1[1];
  const dx = coord2[0] - coord1[0];
  let radAngle = Math.atan(dy / dx);
  if (dy <= 0 && dx >= 0) {
    //第二象限
    radAngle = -radAngle;
  } else if (dx >= 0 && dy >= 0) {
    //第一象限
    radAngle = -radAngle;
  } else if (dx <= 0 && dy >= 0) {
    //第四象限
    radAngle = Math.PI - radAngle;
  } else if (dx <= 0 && dy <= 0) {
    //第三象限
    radAngle = Math.PI - radAngle;
  }
  return radAngle;
}
