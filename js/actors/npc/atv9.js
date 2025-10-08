import { Mob } from "../mob.js";
import { Atv9Sprite } from "../../sprites/npc/atv9.js";


export class Atv9 {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(Atv9Sprite);
  }
}