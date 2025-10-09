import { Mob } from "../mob.js";
import { GoblinPlayerSprite } from "../../sprites/npc/goblinplayer.js";


export class GoblinPlayer {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(GoblinPlayerSprite);
  }
}