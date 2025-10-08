import { Mob } from "../mob.js";
import { HoneypooootSprite } from "../../sprites/npc/honeypoooot.js";


export class Honeypoooot {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(HoneypooootSprite);
  }
}