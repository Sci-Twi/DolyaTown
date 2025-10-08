import { Mob } from "../mob.js";
import { OtilukeSprite } from "../../sprites/npc/otiluke.js";


export class Otiluke {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(OtilukeSprite);
  }
}