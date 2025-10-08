import { FlylingSprite } from "../../sprites/npc/flyling.js";
import { Mob } from "../mob.js";


export class Flyling {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(FlylingSprite);
  }
}