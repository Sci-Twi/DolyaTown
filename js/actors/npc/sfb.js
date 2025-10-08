import { Mob } from "../mob.js";
import { SfbSprite } from "../../sprites/npc/sfb.js";


export class Sfb {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(SfbSprite);
  }
}