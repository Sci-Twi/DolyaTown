import { assets } from "../assets.js";
import { getLanguage } from "../text/language.js";
import { texts } from "../text/text.js";
import { ctx } from "./canvas.js";
import { device } from "./device.js";
const textures = {};

export const textureCache = {
  loadTextures,
  getTexture,
  calcSourceCoor,
};


class TextureCanvas {
  canvas;
  ctx;
  step;

  constructor(width, height, step) {
    this.canvas = new OffscreenCanvas(width, height);
    this.ctx = this.canvas.getContext("2d");
  }
}


const image = new Image();

function getTexture(name) {
  return textures[name];
}

async function loadTexture(name) {
  try {
    return await new Promise((resolve, reject) => {
      ctx.clearRect(0, 0, device.width, device.height);
      const text = texts[getLanguage()].loading + name;
      const length = ctx.measureText(text).width;
      ctx.fillText(text, (device.width - length) / 2, device.midy);
      image.src = "./images/" + assets[name];
      image.onload = function () {
        const tc = new TextureCanvas(this.naturalWidth, this.naturalHeight);
        tc.ctx.drawImage(image, 0, 0);
        textures[name] = tc;
        image.src = "";
        resolve();
      };
    });
  } catch (err) {
    throw new Error("wow what image");
  }
}

async function loadTextures(names) {
  for (const name of names) {
    await loadTexture(name);
  }
}

function calcSourceCoor(id, width) {
  const w = width / 16;
  const sx = (id % w) * 16;
  const sy = Math.floor(id / w) * 16;
  return [sx, sy];
}