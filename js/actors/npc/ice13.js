import { Mob } from "../mob.js";
import { Ice13Sprite } from "../../sprites/npc/ice13.js";


export class Ice13 {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(Ice13Sprite);
  }
}