import { device } from "./device.js";



const ctx = device.getDevice().getContext("2d");
ctx.imageSmoothingEnabled = false;

export const canvas = {
  draw,
  // scale,
  clear,
};

// function scale(sx, sy) {
//   ctx.scale(sx, sy);
//   return canvas;
// }

function clear() {
  ctx.clearRect(0, 0, device.width, device.height);
  return canvas;
}

function draw(imgData, sx, sy, sw, sh, dx, dy, dw, dh) {
  // ctx.scale(scale, scale);
  ctx.drawImage(imgData, sx, sy, sw, sh, dx, dy, dw, dh);
  // console.log("drawing", x, y)
  // ctx.putImageData(imgData, x, y, 0, 0, 16 * scale, 16 * scale);
  // ctx.reset();
  return canvas;
}