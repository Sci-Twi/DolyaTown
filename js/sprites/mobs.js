import { dungeon } from "../dungeon.js";
import { game } from "../game.js";
import { camera, cellView, gameScene, pixelSize } from "../scenes/gameScene.js";
import { canvas } from "../tools/canvas.js";
import { textureCache } from "../tools/textureCache.js";
// import { gameScene } from "../scenes/gameScene.js";

export class MobsMap {
  // mobsArray;
  mobs;
  mobs2D;


  constructor() {
    this.mobs = dungeon.level.levelAttr.mobs;
    this.mobs2D = dungeon.level.levelAttr.mobs2D;
  }
  

  render() {
    
    const ps = pixelSize;
    const halfLength = cellView.halfLength;
    
    const startX = Math.max(camera[0] - halfLength[0], 0);
    const startY = Math.max(camera[1] - halfLength[1], 0);

    const endX = Math.min(camera[0] + halfLength[0], this.mobs2D.width);
    const endY = Math.min(camera[1] + halfLength[1], this.mobs2D.height);
    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        const mob = dungeon.level.levelAttr.mobs2D.get(x, y);
        if (!mob) {
          continue;
        }
        if (!dungeon.level.levelAttr.visited.get(x, y)) {
          continue;
        }
        // too long
        const sprite = mob.mob.character.sprite.characterSprite;
        
        if (sprite.current.frames.length <= sprite.index) {
          sprite.index = 0;
        }
        const textureCanvas = textureCache.getTexture(mob.mob.character.sprite.getTextureName()).canvas;
        const source = textureCache.calcSourceCoor(sprite.current.frames[sprite.index], textureCanvas.width);
        const desti = gameScene.calcScreenCoor(x, y);
        if (sprite.delay < 1 / sprite.current.hz * 1000) {
          sprite.delay += game.step;
          canvas.draw(textureCanvas, ...source, 16, 16, ...desti, ps * 16, ps * 16);
          continue;
        } else {
          sprite.delay = 0;
        }

        
        canvas.draw(textureCanvas, ...source, 16, 16, ...desti, ps * 16, ps * 16);
        sprite.index += 1;
        // console.log(sprite.index)
      }
    }
    

  }
}