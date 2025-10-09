import { Mob } from "../mob.js";
import { HateSokobanSprite } from "../../sprites/npc/hatesokoban.js";


export class HateSokoban {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(HateSokobanSprite);
  }
}