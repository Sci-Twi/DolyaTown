import { gameScene } from "./scene/gameScene.js";
import { textureCache } from "./tools/textureCache.js";
import { assets } from "./assets.js";
export const game = {
  scene: null,
  inputProcessor: null,
  switchScene,
  start,
  // sceneFiles: [],

  
};

const scenes = {
  gameScene,
  
};

async function start() {
  await textureCache.loadTextures(Object.keys(assets));
  this.switchScene("gameScene");
  
  
  // switchScene("");
}

function switchScene(sceneName) {
  if (this.scene) {
    this.scene.destroy();
  }
  this.scene = scenes[sceneName].create();
}