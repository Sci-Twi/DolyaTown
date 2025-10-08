import { Hmdzl001Sprite } from "../../sprites/hero/hmdzl001Sprite.js";
import { Hero } from "../hero.js";

export class Hmdzl001 {
  heroAttr;

  constructor() {
    this.heroAttr = new Hero();
    this.heroAttr.character.linkSprite(Hmdzl001Sprite);
    console.log(this)
  }
}