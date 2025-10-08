import { Mob } from "../mob.js";
import { RustyBladeSprite } from "../../sprites/npc/rustyblade.js";


export class RustyBlade {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(RustyBladeSprite);
  }
}