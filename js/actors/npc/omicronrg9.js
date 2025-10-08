import { Omicronrg9Sprite } from "../../sprites/npc/omicronrg9.js";
import { Mob } from "../mob.js";


export class Omicronrg9 {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(Omicronrg9Sprite);
  }
}