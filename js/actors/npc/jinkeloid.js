import { Mob } from "../mob.js";
import { JinkeloidSprite } from "../../sprites/npc/jinkeloid.js";


export class Jinkeloid {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(JinkeloidSprite);
  }
}