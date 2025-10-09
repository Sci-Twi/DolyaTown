import { Mob } from "../mob.js";
import { FruitCatSprite } from "../../sprites/npc/fruitcat.js";


export class FruitCat {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(FruitCatSprite);
  }
}