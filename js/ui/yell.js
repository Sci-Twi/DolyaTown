import { autoNewLined } from "../text/tool.js";
import { ctx } from "../tools/canvas.js";
import { device } from "../tools/device.js";
import { textureCache } from "../tools/textureCache.js";
import { UI, UISprite } from "./ui.js";
import { renderWindow } from "./win.js";

const fontSize = 25;
const buttonSize = (device.isPhone ? 0.16 : 0.07) * device.width * 1.25;

// const testText = "点击查点击查看信点击查看信息点击查看信息点击查看信息息点击查看信息点击看信息点击查看信息看信息";

export class Yell {
  uiAttr;

  text;
  
  constructor(text) {
    this.uiAttr = new UI();
    this.uiAttr.linkSprite(YellSprite);

    const relativeX = 0.4;
    // const relativeY = 0.7;

    
    // hardcoded for now
    // this.padding = ctx.measureText("点击查看信息").width;
    // const triangleLength = 5 * 6;

    // const relativeWidth = 0.4;
    // const relativeHeight = 0.6;

    

    // this.uiAttr.dx = (device.width - this.padding - triangleLength * 2) / 2;
    // const lineLength = this.uiAttr.dWidth / fontSize;

    this.uiAttr.dx = 0;

    this.uiAttr.dWidth = relativeX * device.width;
    this.uiAttr.dHeight = Math.ceil(text.length * fontSize / this.uiAttr.dWidth) * (fontSize + 5);

    // console.log(this.uiAttr.dHeight)
    // const lineNumber = Math.floor(this.uiAttr.dWidth / testText.length / fontSize);


    // const relativeY = Math.floor(this.uiAttr.dWidth / fontSize);
    
    this.uiAttr.dy = device.height - buttonSize - this.uiAttr.dHeight;

    // console.log(this.uiAttr.dWidth)
    // this.uiAttr.dHeight = lineNumber * fontSize;
    this.text = autoNewLined(text, this.uiAttr.dWidth / fontSize);
    // this.uiAttr.dHeight = 
    // console.log(dungeon.hero)

  }

  render() {
    // const texture = textureCache.getTexture(this.uiAttr.sprite.getTextureName());
    // const uiSprite = this.uiAttr.sprite.uiSprite;
    for (let i = 0; i < this.text.length; i++) {
      ctx.fillText(this.text[i], this.uiAttr.dx, this.uiAttr.dy + i * (5 + fontSize));
    }
    // const pixelSize = 6;
    // renderWindow(texture.canvas, uiSprite.sx, uiSprite.sy, 5, 8, 8, this.uiAttr.dx, this.uiAttr.dy, 5 * pixelSize, this.padding, 30);
    // ctx.fillText(testText, this.uiAttr.dx + 5 * pixelSize, this.uiAttr.dy + 5 * pixelSize);
  }

  onClick() {
    // alert(1)
    return false;
  }

  changeText(text) {
    this.uiAttr.dHeight = Math.ceil(text.length * fontSize / this.uiAttr.dWidth) * (fontSize + 5);
    this.uiAttr.dy = device.height - buttonSize - this.uiAttr.dHeight;
    this.text = autoNewLined(text, this.uiAttr.dWidth / fontSize);
  }
}





class YellSprite {
  uiSprite;

  constructor() {
    this.uiSprite = new UISprite();
    
    this.uiSprite.sx = 22;
    this.uiSprite.sy = 0;

    // unused
    // this.uiSprite.sWidth = 20;
    // this.uiSprite.sHeight = 25;
  }

  // getTextureName() {
  //   return "chrome";
  // }
}