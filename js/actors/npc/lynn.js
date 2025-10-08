import { Mob } from "../mob.js";
import { LynnSprite } from "../../sprites/npc/lynn.js";


export class Lynn {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(LynnSprite);
  }
}