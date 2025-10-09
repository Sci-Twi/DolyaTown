import { Mob } from "../mob.js";
import { OldNewsTwistSprite } from "../../sprites/npc/oldnewstwist.js";


export class OldNewsTwist {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(OldNewsTwistSprite);
  }
}