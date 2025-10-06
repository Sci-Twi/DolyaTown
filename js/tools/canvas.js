import { device } from "./device.js";

// this is weird

const ctx = device.getDevice().getContext("2d");
ctx.imageSmoothingEnabled = false;

export const canvas = {
  draw,
  // save,
  clear,

  setSmooth,
};

function setSmooth(smooth) {
  ctx.imageSmoothingEnabled = smooth;
}

// function save() {
//   ctx.save();
// }

function clear() {
  ctx.clearRect(0, 0, device.width, device.height);
}

function draw(textureCanvas, sx, sy, sw, sh, dx, dy, dw, dh) {
  ctx.drawImage(textureCanvas, sx, sy, sw, sh, dx, dy, dw, dh);
}