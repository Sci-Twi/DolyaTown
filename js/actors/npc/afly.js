import { Mob } from "../mob.js";
import { AFlySprite } from "../../sprites/npc/afly.js";


export class AFly {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(AFlySprite);
  }
}