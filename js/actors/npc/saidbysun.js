import { Mob } from "../mob.js";
import { SaidBySunSprite } from "../../sprites/npc/saidbysun.js";


export class SaidBySun {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(SaidBySunSprite);
  }
}