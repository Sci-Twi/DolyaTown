import { debug } from "../tools/debug.js";
import { dungeon } from "../dungeon.js";
import { camera, pixelSize } from "../scenes/gameScene.js";
import { canvas } from "../tools/canvas.js";

export class ShadowMap {
  shadow;
  constructor() {
    this.shadow = dungeon.level.levelAttr.shadow;
  }

  render() {
    if (debug.lightMode) {
      return;
    }
    const shadow = this.shadow;

    const ps = pixelSize;
    const shadowCanvas = document.getElementById("shadow");
    
    let startX = ((shadowCanvas.width - ps * 16) / 2) % (ps * 16);
    let startY = ((shadowCanvas.height - ps * 16) / 2) % (ps * 16);
    startX = startX === 0 ? startX : startX  - ps * 16;
    startY = startY === 0 ? startY : startY  - ps * 16;

    const widthNumber = Math.ceil(((shadowCanvas.width - ps * 16) / 2) / (ps * 16));
    const heightNumber = Math.ceil(((shadowCanvas.height - ps * 16) / 2) / (ps * 16));
    const coorStartX = camera[0] - widthNumber;
    const coorStartY = camera[1] - heightNumber;

    
    // this.stx.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);
    shadow.scanAllSector(...dungeon.hero.character.pos, dungeon.hero.character.sight);
    
    // holy i swear i will redo this later

    const invisible = [0, 0, 0, 255];
    const visited = [17, 17, 17, 204];
    const visible = [0, 0, 0, 0];

    const width1 = widthNumber + camera[0] + 2 - coorStartX;
    const height1 = heightNumber + camera[1] + 2 - coorStartY;

    const shadowArray = new ImageData(widthNumber + camera[0] + 2 - coorStartX, heightNumber + camera[1] + 2 - coorStartY);
    const visitedArr = dungeon.level.levelAttr.visited;

    for (let y = coorStartY; y <= heightNumber + camera[1] + 1; y++) {
      for (let x = coorStartX; x <= widthNumber + camera[0] + 1; x++) {
        const b1 = [x, y];
        const b2 = [x, y - 1];
        const b3 = [x - 1, y];
        const b4 = [x - 1, y - 1];

        const index = (y - coorStartY) * (widthNumber + camera[0] + 2 - coorStartX) + (x - coorStartX);
        let c = invisible;
        
        let isLit = shadow.isLit(x, y) && shadow.isLit(x, y - 1) && shadow.isLit(x - 1, y) && shadow.isLit(x - 1, y - 1);
        if (isLit) {
          // ugly
          visitedArr.set(...b1, true);
          visitedArr.set(...b2, true);
          visitedArr.set(...b3, true);
          visitedArr.set(...b4, true);

          c = visible;

        } else {
          if ((b1 && b2 && b3 && b4)) {
            if (!visitedArr.get(...b1) || !visitedArr.get(...b2) || !visitedArr.get(...b3) || !visitedArr.get(...b4)) {
              c = invisible;
            } else {
              c = visited;
            }
          }
        }
        
        shadowArray.data[index * 4] = c[0];
        shadowArray.data[index * 4 + 1] = c[1];
        shadowArray.data[index * 4 + 2] = c[2];
        shadowArray.data[index * 4 + 3] = c[3];
      }
    }

    // honestly i've forgot how does this work

    
    // canvas.draw(, 0, 0, width1, height1, startX - ps * 8, startY - ps * 8, width1 * ps * 16, height1 * ps * 16);

  }
}