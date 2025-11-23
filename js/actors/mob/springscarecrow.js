import { Mob } from "../mob.js";
import { SpringScarecrowSprite } from "../../sprites/mob/springscarecrow.js";


export class SpringScarecrow {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(SpringScarecrowSprite);
  }
}