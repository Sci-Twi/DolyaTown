import { Mob } from "../mob.js";
import { RenSprite } from "../../sprites/npc/ren.js";


export class Ren {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(RenSprite);
  }
}