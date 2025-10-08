import { Mob } from "../mob.js";
import { DreamPlayerSprite } from "../../sprites/npc/dreamplayer.js";


export class DreamPlayer {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(DreamPlayerSprite);
  }
}