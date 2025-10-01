import { dungeon } from "../dungeon.js";
import { gameScene } from "../scenes/gameScene.js";

export class MobsMap {
  mobsArray;
  constructor() {
    // this
  }
  getMobs() {
    return this.mobsArray;
  }
  updateMobs() {
    // this.mobsArray = [...dungeon.level.levelAttr.mobs];
  }

  render() {
    // const ps = gameScene.pixelSize;
  }
}