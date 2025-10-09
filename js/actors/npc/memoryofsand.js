import { Mob } from "../mob.js";
import { MemoryOfSandSprite } from "../../sprites/npc/memoryofsand.js";


export class MemoryOfSand {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(MemoryOfSandSprite);
  }
}