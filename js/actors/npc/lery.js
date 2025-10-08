import { Mob } from "../mob.js";
import { LerySprite } from "../../sprites/npc/lery.js";


export class Lery {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(LerySprite);
  }
}