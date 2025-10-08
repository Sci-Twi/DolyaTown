import { HbbSprite } from "../../sprites/npc/hbb.js";
import { Mob } from "../mob.js";


export class Hbb {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(HbbSprite);
  }
}