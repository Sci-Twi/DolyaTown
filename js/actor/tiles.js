// import { assets } from "../assets.js";
import { dungeon } from "../dungeon.js";
// import { terrain } from "../terrain.js";
import { Texture } from "../tools/texture.js";
import { textureCache } from "../tools/textureCache.js";

export const tiles = {
  create,
};

class TilesMap {
  tilesArray;
  texture;

  constructor() {
    this.texture = new Texture(textureCache.getTexture(dungeon.level.tilesTextureName()), 256, 64);
  }
  // mapWidth;
  // mapHeight;
  // constructor() {
  //   // this.tilesArray = [];
  // }

  // constructor() {
    
  // }

  getTiles() {
    return this.tilesArray;
  }
  update() {
    this.tilesArray = [...dungeon.level.levelAttr.map];
  }
  // clone(tilesMap) {
  //   return new TilesMap([...tilesMap.getTiles()]);
  // }
}

function create() {
  const t = new TilesMap();
  t.update();
  console.log(t)
  return t;
  // if (args.length === 1) {
  //   // direct
  //   // t.setTiles(args[0]);
  //   // t.update();
  //   // return t;
  // } else {
  //   // width & height
  //   // t.setTiles(new Array(args[0] * args[1]));
    
  //   // t.update();
  //   // return t;
  // }
}

// function clone(tilesMap) {
//   // return new TilesMap([...tilesMap.getTiles()]);
// }