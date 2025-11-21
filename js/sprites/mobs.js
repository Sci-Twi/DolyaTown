import { debug } from "../tools/debug.js";
import { dungeon } from "../dungeon.js";
import { game } from "../game.js";
import { camera, cellView, gameScene, pixelSize } from "../scenes/gameScene.js";
import { canvas, ctx } from "../tools/canvas.js";
import { textureCache } from "../tools/textureCache.js";
import { Description } from "../ui/description.js";
// import { gameScene } from "../scenes/gameScene.js";

export class MobsMap {
  hero;
  mobs;
  mobs2D;


  constructor() {
    this.hero = dungeon.hero;
    this.mobs = dungeon.level.levelAttr.mobs;
    this.mobs2D = dungeon.level.levelAttr.mobs2D;

  }
  

  render() {
    
    const ps = pixelSize;
    const halfLength = cellView.halfLength;
    
    const startX = Math.max(camera[0] - halfLength[0], 0);
    const startY = Math.max(camera[1] - halfLength[1], 0);

    const endX = Math.min(camera[0] + halfLength[0], this.mobs2D.width - 1);
    const endY = Math.min(camera[1] + halfLength[1], this.mobs2D.height - 1);
    for (let y = startY; y <= endY; y++) {
      for (let x = startX; x <= endX; x++) {
        const npc = dungeon.level.levelAttr.mobs2D.get(x, y);
        if (!npc) {
          continue;
        }

        if (!debug.lightMode) {
          if (!dungeon.level.levelAttr.shadow.isLit(x, y)) {
            continue;
          }
          if (!dungeon.level.levelAttr.visited.get(x, y)) {
            continue;
          }
        }
        
        // too long
        const sprite = npc.mob.character.sprite.characterSprite;
        
        if (sprite.current.frames.length <= sprite.index) {
          sprite.index = 0;
        }
        const textureCanvas = textureCache.getTexture(npc.mob.character.sprite.getTextureName()).canvas;
        const source = textureCache.calcSourceCoor(sprite.current.frames[sprite.index], textureCanvas.width);
        const desti = gameScene.calcScreenCoor(x, y);
        if (sprite.delay < 1 / sprite.current.hz * 1000) {
          sprite.delay += game.step;
        } else {
          sprite.delay = 0;
          sprite.index += 1;
        }
        canvas.draw(textureCanvas, ...source, 16, 16, ...desti, ps * 16, ps * 16);
      }
    }

    // hero
    const [x, y] = this.hero.heroAttr.character.pos;
    if (x < startX || x > endX || y < startY || y > endY ) {
      return;
    }
    const sprite = this.hero.heroAttr.character.sprite.characterSprite;
    if (sprite.current.frames.length <= sprite.index) {
      sprite.index = 0;
    }

    const texture = textureCache.getTexture(this.hero.heroAttr.character.sprite.getTextureName());

    const source = textureCache.calcSourceCoor(sprite.current.frames[sprite.index], texture.canvas.width);
    let [sx, sy] = gameScene.calcScreenCoor(x, y);
    if (sprite.delay < 1 / sprite.current.hz * 1000) {
      sprite.delay += game.step;
    } else {
      sprite.delay = 0;
      sprite.index += 1;
    }

    
    if (sprite.reversed) {
      ctx.save();
      ctx.translate(sx + ps * 16, 0);
      ctx.scale(-1, 1);
      sx = 0;
    }
    canvas.draw(texture.canvas, ...source, 16, 16, sx, sy, ps * 16, ps * 16);
    if (sprite.reversed) {
      ctx.restore();
    }

  }
}