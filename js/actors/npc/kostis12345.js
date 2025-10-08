import { Mob } from "../mob.js";
import { Kostis12345Sprite } from "../../sprites/npc/kostis12345.js";


export class Kostis12345 {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(Kostis12345Sprite);
  }
}