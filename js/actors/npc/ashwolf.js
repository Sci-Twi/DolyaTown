import { Mob } from "../mob.js";
import { AshWolfSprite } from "../../sprites/npc/ashwolf.js";


export class AshWolf {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(AshWolfSprite);
  }
}