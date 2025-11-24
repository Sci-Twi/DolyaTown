import { device } from "./device.js";

export const ctx = device.getDevice().getContext("2d");
ctx.imageSmoothingEnabled = false;

const fontSize = 30;
ctx.textBaseline = "top";
ctx.fillStyle = "white";
ctx.font = fontSize + "px sans-serif";

export const canvas = {
  draw,
  clear,
};

function clear() {
  ctx.clearRect(0, 0, device.width, device.height);
}

function draw(textureCanvas, sx, sy, sw, sh, dx, dy, dw, dh) {
  ctx.drawImage(textureCanvas, sx, sy, sw, sh, dx, dy, dw, dh);
}