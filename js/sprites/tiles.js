import { dungeon } from "../dungeon.js";
import { gameScene } from "../scenes/gameScene.js";
import { Texture } from "../tools/texture.js";
import { textureCache } from "../tools/textureCache.js";
import { canvas } from "../tools/canvas.js";
import { device } from "../tools/device.js";

// export const tiles = {
//   create,
// };

export class TilesMap {
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
    const ps = gameScene.pixelSize;
    const camera = gameScene.camera;


    let startX = ((device.width - ps * 16) / 2) % (ps * 16);
    let startY = ((device.height - ps * 16) / 2) % (ps * 16);
    startX = startX === 0 ? startX : startX - ps * 16;
    startY = startY === 0 ? startY : startY - ps * 16;

    
    const widthNumber = Math.ceil(((device.width - ps * 16) / 2) / (ps * 16));
    const heightNumber = Math.ceil(((device.height - ps * 16) / 2) / (ps * 16));
    
    const coorStartX = camera[0] - widthNumber;
    const coorStartY = camera[1] - heightNumber;

    const w = this.texture.width / 16;
    for (let y = coorStartY; y <= heightNumber + camera[1]; y++) {
      for (let x = coorStartX; x <= widthNumber + camera[0]; x++) {
        const dx = (x - coorStartX) * 16 * ps + startX;
        const dy = (y - coorStartY) * 16 * ps + startY;

        const id = dungeon.level.levelAttr.getTile(x, y);
        const sx = (id % w) * 16;
        const sy = Math.floor(id / w) * 16;
        canvas.draw(textureCache.getTexture(dungeon.level.tilesTextureName()), sx, sy, 16, 16, dx, dy, ps * 16, ps * 16);
      }
    }


  }

}

// function create() {
//   const t = new TilesMap();
//   t.updateTiles();
//   return t;
// }