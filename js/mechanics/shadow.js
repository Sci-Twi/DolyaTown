import { dungeon } from "../dungeon.js";
import { checkFlag, flags } from "../levels/terrain.js";

const mult = [
  [1,  0,  0, -1, -1,  0,  0,  1],
  [0,  1, -1,  0,  0, -1,  1,  0],
  [0,  1,  1,  0,  0, -1, -1,  0],
  [1,  0,  0,  1, -1,  0,  0, -1],
];

export class Shadow {
  light;
  width;
  height;
  constructor(fieldOfView) {
    this.light = fieldOfView;
    this.width = this.light.width;
    this.height = this.light.height;
  }

  blocked(x, y) {
    const blocked = x < 0 || y < 0 || x >= this.width || y >= this.height;
    if (blocked) {
      return true;
    }

    const lightPass = checkFlag(dungeon.level.levelAttr.map.get(x, y), flags.los_blocking);
    return lightPass;
  }

  
  isLit(x, y) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return false;
    }
    return this.light.get(x, y);
  }
  setLit(x, y) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.light.set(x, y, true);
    }
  }

  castLight(cx, cy, row, start, end, radius, xx, xy, yx, yy, id) {
    if (start < end) {
      return;
    }
    const area = radius * radius;
    let startCopy = start;
    let newStart;
    let blocked = false;
    for (let j = row; j < radius + 1; j++) {
      let dx = -j - 1;
      const dy = -j;

      while(dx <= 0) {
        dx += 1;
        const x = cx + dx * xx + dy * xy;
        const y = cy + dx * yx + dy * yy;
        
        const leftSlope = (dx - 0.5) / (dy + 0.5);
        const rightSlope = (dx + 0.5) / (dy - 0.5);

        if (startCopy < rightSlope) {
          continue;
        } else if (end > leftSlope) {
          break;
        } else {
          if (dx * dx + dy * dy < area) {
            this.setLit(x, y);
          }
          if (blocked) {
            if (this.blocked(x, y)) {
              newStart = rightSlope;
              continue;
            } else {
              blocked = false;
              startCopy = newStart;
            }
          } else {
            if (this.blocked(x, y) && j < radius) {
              blocked = true;
              this.castLight(cx, cy, j + 1, startCopy, leftSlope, radius, xx, xy, yx, yy, id + 1);
              newStart = rightSlope;
            }
          }
        }
      }
      if (blocked) {
        break;
      }
    }
  }

  scanAllSector(x, y, radius) {
    this.light.fill(false);
    for (let oct = 0; oct < 8; oct++) {
      this.castLight(x, y, 1, 1, 0, radius, mult[0][oct], mult[1][oct], mult[2][oct], mult[3][oct], 0);
    }
    this.light.set(x, y, true);
  }
  // maybe someday i will rewrite it to mine shadowcaster
  
}