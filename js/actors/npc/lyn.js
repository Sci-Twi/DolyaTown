import { Mob } from "../mob.js";
import { LynSprite } from "../../sprites/npc/lyn.js";


export class Lyn {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(LynSprite);
  }
}