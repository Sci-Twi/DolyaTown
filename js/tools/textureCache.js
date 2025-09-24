import {assets} from "../assets.js";
const textures = {

};

export const textureCache = {
  // textures,
  loadTextures,
  getTexture,
};

// image2texturebycanvas
const canvas = document.createElement("canvas");
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
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
        textures[name] = ctx.getImageData(0, 0, 16, 16);
        image.src = "";
        resolve();
      };
    });
  } catch (err) {
    throw new Error("wow");
  }
}

async function loadTextures(names) {
  for (const name of names) {
    await loadTexture(name);
  }
  // console.log(textures);
}

