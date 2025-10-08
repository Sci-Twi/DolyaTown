import { Mob } from "../mob.js";
import { CatSheepSprite } from "../../sprites/npc/catsheep.js";


export class CatSheep {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(CatSheepSprite);
  }
}