import "./tools/device.js";
import { interLevelScene } from "./scenes/interLevelScene.js";

export const game = {
  scene: null,

  now: 0,

  switchScene(scene) {
    if (this.scene) {
      this.scene.destroy();
    }
    this.scene = scene;
    scene.create();
  },
  
  start() {
    this.switchScene(interLevelScene);
  },

  updateStep() {
    const now = window.performance.now();
    const step = now - this.now;
    this.step = step;
    this.now = now;
  },

  render() {
    game.updateStep();
    game.scene.render();
    requestAnimationFrame(game.render);
  },
};
