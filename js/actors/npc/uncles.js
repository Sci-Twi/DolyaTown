import { Mob } from "../mob.js";
import { UnclesSprite } from "../../sprites/npc/uncles.js";


export class Uncles {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(UnclesSprite);
  }
}