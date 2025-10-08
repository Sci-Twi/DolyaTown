import { Xavier251998Sprite } from "../../sprites/npc/xavier251998.js";
import { Mob } from "../mob.js";


export class Xavier251998 {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(Xavier251998Sprite);
  }
}