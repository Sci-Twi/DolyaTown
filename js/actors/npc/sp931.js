import { Mob } from "../mob.js";
import { Sp931Sprite } from "../../sprites/npc/sp931.js";


export class Sp931 {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(Sp931Sprite);
  }
}