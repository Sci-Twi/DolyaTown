import { Mob } from "../mob.js";
import { RainTrainerSprite } from "../../sprites/npc/raintrainer.js";


export class RainTrainer {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(RainTrainerSprite);
  }
}