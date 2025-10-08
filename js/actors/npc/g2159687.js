import { Mob } from "../mob.js";
import { G2159687Sprite } from "../../sprites/npc/g2159687.js";


export class G2159687 {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(G2159687Sprite);
  }
}