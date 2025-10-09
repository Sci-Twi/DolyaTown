import { Mob } from "../mob.js";
import { AdultDragonVioletSprite } from "../../sprites/mob/adultdragonviolet.js";


export class AdultDragonViolet {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(AdultDragonVioletSprite);
  }
}