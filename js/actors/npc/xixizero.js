import { Mob } from "../mob.js";
import { XixizeroSprite } from "../../sprites/npc/xixizero.js";


export class Xixizero {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(XixizeroSprite);
  }
}