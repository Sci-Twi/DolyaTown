import { Mob } from "../mob.js";
import { BlackMeowSprite } from "../../sprites/npc/blackmeow.js";


export class BlackMeow {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(BlackMeowSprite);
  }
}