import { Level } from "../level.js";
import { townLayouts } from "../layouts/townLayouts.js";

export class TownLevel {
  levelAttr;
  constructor() {
    this.levelAttr = new Level(48, 48);
    this.levelAttr.map.setMapArray([...townLayouts]);
    // this.levelAttr.map = [...townLayouts];
  }

  tilesTextureName() {
    return "tiles_town";
  }
}