import { Mob } from "../mob.js";
import { SadsaltanSprite } from "../../sprites/npc/sadsaltan.js";


export class Sadsaltan {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(SadsaltanSprite);
  }
}