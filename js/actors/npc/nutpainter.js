import { Mob } from "../mob.js";
import { NutPainterSprite } from "../../sprites/npc/nutpainter.js";


export class NutPainter {
  mob;
  constructor() {
    this.mob = new Mob();
    this.mob.character.linkSprite(NutPainterSprite);
  }
}