import { Mob } from "../mob.js";
import { UdawosSprite } from "../../sprites/npc/udawos.js";


export class Udawos {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(UdawosSprite);
  }
}