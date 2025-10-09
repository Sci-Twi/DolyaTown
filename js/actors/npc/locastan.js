import { Mob } from "../mob.js";
import { LocastanSprite } from "../../sprites/npc/locastan.js";


export class Locastan {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(LocastanSprite);
  }
}