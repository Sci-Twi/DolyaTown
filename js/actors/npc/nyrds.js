import { Mob } from "../mob.js";
import { NyrdsSprite } from "../../sprites/npc/nyrds.js";


export class Nyrds {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(NyrdsSprite);
  }
}