import { Mob } from "../mob.js";
import { TypedScrollSprite } from "../../sprites/npc/typedscroll.js";


export class TypedScroll {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(TypedScrollSprite);
  }
}