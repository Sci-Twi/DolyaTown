import { Mob } from "../mob.js";
import { RealManSprite } from "../../sprites/npc/realman.js";


export class RealMan {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(RealManSprite);
  }
}