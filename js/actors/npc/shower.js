import { Mob } from "../mob.js";
import { ShowerSprite } from "../../sprites/npc/shower.js";


export class Shower {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(ShowerSprite);
  }
}