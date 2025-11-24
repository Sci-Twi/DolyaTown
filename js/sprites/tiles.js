import { dungeon } from "../dungeon.js";
import { camera, cellView, gameScene, pixelSize } from "../scenes/gameScene.js";
import { textureCache } from "../tools/textureCache.js";
import { canvas } from "../tools/canvas.js";
import { terrain } from "../levels/terrain.js";

export class TilesMap {
  map;
  textureCanvas;
  
  constructor() {
    this.map = dungeon.level.levelAttr.map;
    this.textureCanvas = textureCache.getTexture(dungeon.level.getTextureName()).canvas;
  }

  render() {
    canvas.clear();
    

    const halfLength = cellView.halfLength;
    
    const startX = Math.max(camera[0] - halfLength[0], 0);
    const startY = Math.max(camera[1] - halfLength[1], 0);

    const endX = Math.min(camera[0] + halfLength[0], this.map.width - 1);
    const endY = Math.min(camera[1] + halfLength[1], this.map.height - 1);

    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        this.renderSingle(x, y);
      }
    }
  }

  renderSingle(x, y) {
    const ps = pixelSize;
    const id = dungeon.level.levelAttr.map.get(x, y);

    const source = textureCache.calcSourceCoor(id, this.textureCanvas.width);
    const desti = gameScene.calcScreenCoor(x, y);

    if (id === terrain.well || id === terrain.alchemy) {
      canvas.draw(this.textureCanvas, ...textureCache.calcSourceCoor(terrain.water, this.textureCanvas.width), 16, 16, ...desti, ps * 16, ps * 16);
    }
    
    canvas.draw(this.textureCanvas, ...source, 16, 16, ...desti, ps * 16, ps * 16);
  }
}
