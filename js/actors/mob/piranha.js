import { Mob } from "../mob.js";
import { PiranhaSprite } from "../../sprites/mob/piranha.js";


export class Piranha {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(PiranhaSprite);
  }
}