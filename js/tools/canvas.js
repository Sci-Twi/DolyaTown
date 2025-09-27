import { screen } from "./screen.js";



const ctx = screen.getScreen().getContext("2d");
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
  ctx.clearRect(0, 0, screen.width, screen.height);
  return canvas;
}

function draw(imgData, x, y, scale) {
  
  // console.log("drawing", x, y)
  ctx.putImageData(imgData, x, y, 0, 0, 16 * scale, 16 * scale);
  // ctx.reset();
  return canvas;
}