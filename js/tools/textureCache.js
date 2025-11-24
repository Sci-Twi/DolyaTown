import {assets} from "../assets.js";
const textures = {};

export const textureCache = {
  // textures,
  loadTextures,
  getTexture,
  calcSourceCoor,
  // setTextureReversed,
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