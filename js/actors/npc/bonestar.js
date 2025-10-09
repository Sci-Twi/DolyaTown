import { Mob } from "../mob.js";
import { BoneStarSprite } from "../../sprites/npc/bonestar.js";


export class BoneStar {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(BoneStarSprite);
  }
}