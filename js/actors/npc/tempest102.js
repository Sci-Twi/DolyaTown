import { Tempest102Sprite } from "../../sprites/npc/tempest102.js";
import { Mob } from "../mob.js";


export class Tempest102 {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(Tempest102Sprite);
  }
}