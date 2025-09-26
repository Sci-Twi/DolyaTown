import { interLevelScene } from "./scene/interLevelScene.js";

export const game = {
  scene: null,
  inputProcessor: null,
  switchScene(scene) {
    if (this.scene) {
      this.scene.destroy();
    }
    this.scene = scene;
    scene.create();
  },
  // switchScene(sceneName) {
  //   if (this.scene) {
  //     this.scene.destroy();
  //   }
  //   this.scene = scenes[sceneName];
  //   scenes[sceneName].create();
  // },
  start,
};

function start() {
  this.switchScene(interLevelScene);
  
  
}
