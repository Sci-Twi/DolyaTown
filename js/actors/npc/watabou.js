import { Mob } from "../mob.js";
import { WatabouSprite } from "../../sprites/npc/watabou.js";


export class Watabou {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(WatabouSprite);
  }
}