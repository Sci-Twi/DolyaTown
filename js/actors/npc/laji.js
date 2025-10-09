import { Mob } from "../mob.js";
import { LajiSprite } from "../../sprites/npc/laji.js";


export class Laji {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(LajiSprite);
  }
}