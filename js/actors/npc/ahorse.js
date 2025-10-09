import { Mob } from "../mob.js";
import { AHorseSprite } from "../../sprites/npc/ahorse.js";


export class Ahorse {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(AHorseSprite);
  }
}