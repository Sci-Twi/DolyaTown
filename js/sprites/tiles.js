import { dungeon } from "../dungeon.js";
import { gameScene } from "../scenes/gameScene.js";
import { textureCache } from "../tools/textureCache.js";
import { canvas } from "../tools/canvas.js";

export class TilesMap {
  tilesArray;
  texture;

  constructor() {
    // considering rewrite: MobSprite->CharSprite->animation
  }

  getTiles() {
    return this.tilesArray;
  }
  updateTiles() {
    this.tilesArray = [...dungeon.level.levelAttr.map];
  }

  render() {
    const ps = gameScene.getPixelSize();
    const camera = gameScene.getCamera();

    const halfLength = gameScene.getCellView().halfLength;
    
    const coorStartX = camera[0] - halfLength[0];
    const coorStartY = camera[1] - halfLength[1];

    const textureCanvas = textureCache.getTexture(dungeon.level.tilesTextureName()).canvas;

    for (let y = coorStartY; y <= camera[1] + halfLength[1]; y++) {
      for (let x = coorStartX; x <= camera[0] + halfLength[0]; x++) {
        const id = dungeon.level.levelAttr.getTile(x, y);

        const source = textureCache.calcSourceCoor(id, textureCanvas.width);
        const desti = gameScene.calcScreenCoor(x, y);

        canvas.draw(textureCanvas, ...source, 16, 16, ...desti, ps * 16, ps * 16);
      }
    }


  }

}
