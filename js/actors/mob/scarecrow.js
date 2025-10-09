import { Mob } from "../mob.js";
import { ScarecrowSprite } from "../../sprites/mob/scarecrow.js";


export class Scarecrow {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(ScarecrowSprite);
  }
}