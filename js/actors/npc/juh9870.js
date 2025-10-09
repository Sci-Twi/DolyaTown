import { Mob } from "../mob.js";
import { Juh9870Sprite } from "../../sprites/npc/juh9870.js";


export class Juh9870 {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(Juh9870Sprite);
  }
}