// import { assets } from "../assets.js";
import { dungeon } from "../dungeon.js";
import { gameScene } from "../scene/gameScene.js";
// import { terrain } from "../terrain.js";
import { Texture } from "../tools/texture.js";
import { textureCache } from "../tools/textureCache.js";
import { canvas } from "../tools/canvas.js";
import { screen } from "../tools/screen.js";

export const tiles = {
  create,
};

class TilesMap {
  tilesArray;
  texture;

  constructor() {
    this.texture = new Texture(256, 64, 16);
  }

  getTiles() {
    return this.tilesArray;
  }
  updateTiles() {
    this.tilesArray = [...dungeon.level.levelAttr.map];
  }

  render() {
    // const width = dungeon.level.levelAttr.mapWidth;
    const ps = gameScene.pixelSize;
    const camera = gameScene.camera;
    // console.log(camera)


    let startX = ((screen.width - ps * 16) / 2) % (ps * 16);
    let startY = ((screen.height - ps * 16) / 2) % (ps * 16);
    startX = startX === 0 ? startX : startX - ps * 16;
    startY = startY === 0 ? startY : startY - ps * 16;

    
    const widthNumber = Math.ceil(((screen.width - ps * 16) / 2) / (ps * 16));
    const heightNumber = Math.ceil(((screen.height - ps * 16) / 2) / (ps * 16));
    
    // this.mtx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
    const coorStartX = camera[0] - widthNumber;
    const coorStartY = camera[1] - heightNumber;
    // canvas.clear();
    // canvas.scale(ps, ps);

    const w = this.texture.width / 16;
    for (let y = coorStartY; y <= heightNumber + camera[1]; y++) {
      for (let x = coorStartX; x <= widthNumber + camera[0]; x++) {
        // console.log(x, y)
        // const block = this.game.gamecore.getBlock([x, y]);
        // if (!block) {
        //   continue;
        // }

        // console.log(x, y)
        const dx = (x - coorStartX) * 16 * ps + startX;
        const dy = (y - coorStartY) * 16 * ps + startY;
        // console.log(dx, dy)

        const id = dungeon.level.levelAttr.getTile(x, y);
        // const h = this.texture.height / 16;

        const sx = (id % w) * 16;
        const sy = Math.floor(id / w) * 16;
        // const sy = Math.floor(id / this.texture.height) * 16;
        canvas.draw(textureCache.getTexture(dungeon.level.tilesTextureName()), sx, sy, 16, 16, dx, dy, ps * 16, ps * 16);
        // canvas.draw(textureCache.getTexture("tiles_town")[dungeon.level.levelAttr.getTile(x, y)], sx, sy, ps);

        // this.renderMapBlock({
        //   // imgData: this.mapRenderData[block.name],
        //   // imgData: textureCache.getTexture("tiles_town")[terrain[block.name]],
        //   imgData: textureCache.getTexture("tiles_town")[dungeon.level.levelAttr.getTile(x, y)],
        //   sx,
        //   sy,
        // });
      }
    }

    // canvas.scale(1 / ps,  1 /ps);



  }

  // clone(tilesMap) {
  //   return new TilesMap([...tilesMap.getTiles()]);
  // }
}

function create() {
  const t = new TilesMap();
  t.updateTiles();
  // console.log(t)
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