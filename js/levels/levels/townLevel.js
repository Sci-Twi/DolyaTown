import { Level } from "../level.js";
import { townLayouts } from "../layouts/townLayouts.js";
import { Apostle } from "../../actors/npc/apostle.js";
import { dungeon } from "../../dungeon.js";

export class TownLevel {
  levelAttr;
  // textureName;
  constructor() {
    this.levelAttr = new Level(48, 48);
    this.levelAttr.map.setMapArray([...townLayouts]);

    dungeon.hero.character.pos = [25, 21];

    const apostle = new Apostle();
    apostle.mob.character.pos = [20, 21];
    this.levelAttr.addMob(apostle);
    // this.textureName = ;

    // console.log(apostle)
    // this.levelAttr.map = [...townLayouts];
  }

  getTextureName() {
    return "tiles_town";
  }
}