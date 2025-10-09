import { Mob } from "../mob.js";
import { StormAndRainSprite } from "../../sprites/npc/stormandrain.js";


export class StormAndRain {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(StormAndRainSprite);
  }
}