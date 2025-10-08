import { Mob } from "../mob.js";
import { RavenWolfSprite } from "../../sprites/npc/ravenwolf.js";


export class RavenWolf {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(RavenWolfSprite);
  }
}