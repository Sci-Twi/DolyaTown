import { Mob } from "../mob.js";
import { DachhackSprite } from "../../sprites/npc/dachhack.js";


export class Dachhack {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(DachhackSprite);
  }
}