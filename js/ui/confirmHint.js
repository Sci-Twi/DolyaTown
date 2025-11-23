import { getLanguage } from "../text/language.js";
import { texts } from "../text/text.js";
import { ctx } from "../tools/canvas.js";
import { device } from "../tools/device.js";
import { textureCache } from "../tools/textureCache.js";
import { UI, UISprite } from "./ui.js";
import { renderWindow } from "./win.js";

export class ConfirmHint {
  uiAttr;

  
  constructor() {
    this.uiAttr = new UI();
    this.uiAttr.linkSprite(ConfirmHintSprite);

    // const relativeX = 0.3;
    const relativeY = 0.7;

    
    // hardcoded for now
    this.padding = ctx.measureText(texts[getLanguage()].search).width;
    const triangleLength = 5 * 6;

    // const relativeWidth = 0.4;
    // const relativeHeight = 0.6;

    this.uiAttr.dx = (device.width - this.padding - triangleLength * 2) / 2;

    this.uiAttr.dy = relativeY * device.height;

    this.uiAttr.dWidth = triangleLength * 2 + this.padding;
    this.uiAttr.dHeight = triangleLength * 2 + 30;
    // this.uiAttr.dHeight = 
    // console.log(dungeon.hero)

  }

  render() {
    const texture = textureCache.getTexture(this.uiAttr.sprite.getTextureName());
    const uiSprite = this.uiAttr.sprite.uiSprite;

    const pixelSize = 6;
    renderWindow(texture.canvas, uiSprite.sx, uiSprite.sy, 5, 8, 8, this.uiAttr.dx, this.uiAttr.dy, 5 * pixelSize, this.padding, 30);
    ctx.fillText(texts[getLanguage()].search, this.uiAttr.dx + 5 * pixelSize, this.uiAttr.dy + 5 * pixelSize);
  }

  onClick() {
    // alert(1)
    return false;
  }
}





class ConfirmHintSprite {
  uiSprite;

  constructor() {
    this.uiSprite = new UISprite();
    
    this.uiSprite.sx = 22;
    this.uiSprite.sy = 0;

    // unused
    // this.uiSprite.sWidth = 20;
    // this.uiSprite.sHeight = 25;
  }

  getTextureName() {
    return "chrome";
  }
}