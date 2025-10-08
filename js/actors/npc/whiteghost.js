import { Mob } from "../mob.js";
import { WhiteGhostSprite } from "../../sprites/npc/whiteghost.js";


export class WhiteGhost {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(WhiteGhostSprite);
  }
}