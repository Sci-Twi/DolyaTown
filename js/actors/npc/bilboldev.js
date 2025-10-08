import { BilboldevSprite } from "../../sprites/npc/bilboldev.js";
import { Mob } from "../mob.js";


export class Bilboldev {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(BilboldevSprite);
  }
}