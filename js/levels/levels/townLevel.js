import { Level } from "../level.js";
import { townLayouts } from "../layouts/townLayouts.js";
import { Apostle } from "../../actors/npc/apostle.js";

export class TownLevel {
  levelAttr;
  constructor() {
    this.levelAttr = new Level(48, 48);
    this.levelAttr.map.setMapArray([...townLayouts]);

    const apostle = new Apostle();
    apostle.mob.character.pos = [20, 21];
    this.levelAttr.mobs.add(apostle);

    // console.log(apostle)
    // this.levelAttr.map = [...townLayouts];
  }

  tilesTextureName() {
    return "tiles_town";
  }
}