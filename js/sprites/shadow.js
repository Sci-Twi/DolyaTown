import { debug } from "../tools/debug.js";
import { dungeon } from "../dungeon.js";
import { camera, cellView, gameScene, pixelSize } from "../scenes/gameScene.js";
import { canvas } from "../tools/canvas.js";
// import { device } from "../tools/device.js";

export class ShadowMap {
  shadow;
  shadowCanvas;
  
  constructor() {
    this.shadow = dungeon.level.levelAttr.shadow;
    // 100 100 must be enough
    this.shadowCanvas = new OffscreenCanvas(100, 100);
  }

  render() {
    if (debug.lightMode) {
      return;
    }
    const shadow = this.shadow;

    const ps = pixelSize;

    const halfLength = cellView.halfLength;

    const startX = Math.max(camera[0] - halfLength[0], 0);
    const startY = Math.max(camera[1] - halfLength[1], 0);

    const endX = Math.min(camera[0] + halfLength[0], this.shadow.width - 1);
    const endY = Math.min(camera[1] + halfLength[1], this.shadow.height - 1);

    const invisible = [0, 0, 0, 255];
    const visited = [17, 17, 17, 204];
    const visible = [0, 0, 0, 0];

    const shadowWidth = endX + 2 - startX;
    const shadowHeight = endY + 2 - startY;

    const shadowArray = new ImageData(shadowWidth, shadowHeight);
    const visitedArr = dungeon.level.levelAttr.visited;


    for (let y = startY; y <= endY + 1; y++) {
      for (let x = startX; x <= endX + 1; x++) {
        const b1 = [x, y];
        const b2 = [x, y - 1];
        const b3 = [x - 1, y];
        const b4 = [x - 1, y - 1];

        const index = (y - startY) * shadowWidth + (x - startX);
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
    const stx = this.shadowCanvas.getContext("2d");

    stx.putImageData(shadowArray, 0, 0);
    canvas.setSmooth(true);
    const desti = gameScene.calcScreenCoor(startX, startY).map((coor) => {return coor - ps * 8});
    canvas.draw(this.shadowCanvas, 0, 0, shadowWidth, shadowHeight, ...desti, shadowWidth * ps * 16, shadowHeight * ps * 16);
    canvas.setSmooth(false);
    stx.clearRect(0, 0, this.shadowCanvas.width, this.shadowCanvas.height);
  }
}