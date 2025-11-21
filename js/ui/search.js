import { canvas } from "../tools/canvas.js";
import { textureCache } from "../tools/textureCache.js";
import { device } from "../tools/device.js";
import { UI, UISprite } from "./ui.js";
import { dungeon } from "../dungeon.js";
import { ConfirmHint } from "./confirmHint.js";
import { camera, pixelSize } from "../scenes/gameScene.js";
import { input } from "../tools/input.js";
import { Description } from "./description.js";
import { terrain } from "../levels/terrain.js";
// import { getLanguage } from "../text/language.js";
// import { text } from "../text/text.js";

// all right here we come back to single sample
export class Search {
  uiAttr;
  

  clicked = false;

  constructor() {
    this.uiAttr = new UI();
    this.uiAttr.linkSprite(SearchSprite);

    const relativeX = device.isPhone ? 0.16 : 0.07;
    const relativeWidth = device.isPhone ? 0.16 : 0.07;
    const scaleHeight = 1.25;

    this.uiAttr.dx = device.width * relativeX;

    this.uiAttr.dWidth = device.width * relativeWidth;
    this.uiAttr.dHeight = scaleHeight * this.uiAttr.dWidth;

    this.uiAttr.dy = device.height - this.uiAttr.dHeight;

  }

  // maybe this shouldnt be here
  render() {
    const texture = textureCache.getTexture(this.uiAttr.sprite.getTextureName());
    const uiSprite = this.uiAttr.sprite.uiSprite;
    canvas.draw(texture.canvas, uiSprite.sx, uiSprite.sy, uiSprite.sWidth, uiSprite.sHeight, this.uiAttr.dx, this.uiAttr.dy, this.uiAttr.dWidth, this.uiAttr.dHeight);
  }

  onClick() {
    let clicked = false;
    for (const ui of dungeon.level.levelAttr.ui) {
      if (ui instanceof ConfirmHint) {
        clicked = true;
      }
    }

    if (clicked) {
      // not done:
      // search();
      closeConfirmHint();
      input.deleteLayer(searchClick);
      return true;
    }
    // index might change
    input.insertLayer(searchClick, 1);
    // // TODO: create a window
    dungeon.level.levelAttr.ui.push(new ConfirmHint());
    // TODO: create a thing to create a window
    // console.log("press a tile to examine")
    return true;
  }

  
}

function closeConfirmHint() {
  // bad
  dungeon.level.levelAttr.ui = dungeon.level.levelAttr.ui.filter((u) => !(u instanceof ConfirmHint));
}

function searchClick(event) {
  // input.insertLayer(searchClick, );
  const num = pixelSize * 16;

  const clientX = device.isPhone ? event.touches[0].clientX : event.clientX;
  const clientY = device.isPhone ? event.touches[0].clientY : event.clientY;
  
  // not good here
  const biasX = Math.floor((clientX - device.midx - num / 2) / num) + 1;
  const biasY = Math.floor((clientY - device.midy - num / 2) / num) + 1;

  const x = camera[0] + biasX;
  const y = camera[1] + biasY;

  // alert(x + "," + y)

  closeConfirmHint();
  input.deleteLayer(searchClick);

  const ui = dungeon.level.levelAttr.ui;

  

  if (!dungeon.level.levelAttr.visited.get(x, y)) {
    ui.push(new Description("terrain", terrain.shadow));
    return true;
  }

  // hero
  const hero = dungeon.hero.heroAttr.character;
  const [hx, hy] = hero.pos;
  if (hx === x && hy === y) {
    const sprite = hero.sprite;
    ui.push(new Description(sprite.getTextureName(), sprite.characterSprite));
    return true;
  }

  // npc
  const npc = dungeon.level.levelAttr.mobs2D.get(x, y);
  if (dungeon.level.levelAttr.shadow.isLit(x, y)) {
    if (npc) {
      const sprite = npc.mob.character.sprite;
      ui.push(new Description(sprite.getTextureName(), sprite.characterSprite));
      return true;
    }
  }

  // block
  const block = dungeon.level.levelAttr.map.get(x, y);
  ui.push(new Description("terrain", block));
  return true;
  // if (dungeon.level.levelAttr.visited.get(x, y) || debug.lightMode) {
  //   mapClick(x, y);
  // }
  


}

class SearchSprite {
  uiSprite;
  
  constructor() {
    this.uiSprite = new UISprite();

    this.uiSprite.sx = 20;
    this.uiSprite.sy = 7;
    this.uiSprite.sWidth = 20;
    this.uiSprite.sHeight = 25;
  }

  // honestly i dont know why coding like this but i have no idea how to rewrite
  getTextureName() {
    return "toolbar";
  }
}