import { Mob } from "../mob.js";
import { ApostleSprite } from "../../sprites/npc/apostle.js";


export class Apostle {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(ApostleSprite);
    // this.mob.spriteClass = ApostleSprite;

  }

}