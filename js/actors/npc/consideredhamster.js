import { Mob } from "../mob.js";
import { ConsideredHamsterSprite } from "../../sprites/npc/consideredhamster.js";


export class ConsideredHamster {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(ConsideredHamsterSprite);
  }
}