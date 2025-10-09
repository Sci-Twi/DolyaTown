import { Mob } from "../mob.js";
import { NoodleMireSprite } from "../../sprites/npc/noodlemire.js";


export class NoodleMire {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(NoodleMireSprite);
  }
}