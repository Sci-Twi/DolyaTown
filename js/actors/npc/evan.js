import { Mob } from "../mob.js";
import { EvanSprite } from "../../sprites/npc/evan.js";


export class Evan {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(EvanSprite);
  }
}