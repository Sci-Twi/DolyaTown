import { Level } from "../level.js";
// import { tiles } from "../../actor/tiles.js";
import { townLayouts } from "../layouts/townLayouts.js";
import { assets } from "../../assets.js";

export class TownLevel {
  levelAttr;
  constructor() {
    this.levelAttr = new Level(48, 48);
    // this.levelAttr.map = tiles.create(townLayouts);
    this.levelAttr.map = [...townLayouts];
  }

  tilesTextureName() {
    return "tiles_town";
  }
}