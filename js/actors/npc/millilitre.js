import { Mob } from "../mob.js";
import { MillilitreSprite } from "../../sprites/npc/millilitre.js";


export class Millilitre {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(MillilitreSprite);
  }
}