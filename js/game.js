import { interLevelScene } from "./scenes/interLevelScene.js";

export const game = {
  scene: null,
  inputProcessor: null,


  // step: 0,
  // now: 0,

  // passedTime: 0,
  // totalTime: 0,
  

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
  start() {
    this.switchScene(interLevelScene);
  },
};
