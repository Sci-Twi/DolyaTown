import {assets} from "../assets.js";
const textures = {

};

export const textureCache = {
  // textures,
  loadTextures,
  getTexture,
};

// image 2 texture by canvas
const canvas = new OffscreenCanvas(500, 500);
const ctx = canvas.getContext("2d");
const image = new Image();

function getTexture(name) {
  // console.log(name, textures[name])
  return textures[name];
}

async function loadTexture(name) {
  try {
    return await new Promise((resolve, reject) => {
      image.src = "/images/" + assets[name];
      image.onload = function () {
        const width = this.naturalWidth;
        const height = this.naturalHeight;
        ctx.drawImage(image, 0, 0);
        textures[name] = ctx.getImageData(0, 0, width, height);
        image.src = "";
        ctx.clearRect(0, 0, 500, 500);
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

