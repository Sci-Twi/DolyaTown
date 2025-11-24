import { autoNewLined } from "../text/tool.js";
import { ctx } from "../tools/canvas.js";
import { device } from "../tools/device.js";
import { UI, UISprite } from "./ui.js";

const fontSize = 25;
const buttonSize = (device.isPhone ? 0.16 : 0.07) * device.width * 1.25

export class Yell {
  uiAttr;

  text;
  
  constructor(text) {
    this.uiAttr = new UI();
    this.uiAttr.linkSprite(YellSprite);

    const relativeX = 0.4;

    this.uiAttr.dx = 0;

    this.uiAttr.dWidth = relativeX * device.width;
    this.uiAttr.dHeight = Math.ceil(text.length * fontSize / this.uiAttr.dWidth) * (fontSize + 5);
    
    this.uiAttr.dy = device.height - buttonSize - this.uiAttr.dHeight;

    this.text = autoNewLined(text, this.uiAttr.dWidth / fontSize);
  }

  render() {
    for (let i = 0; i < this.text.length; i++) {
      ctx.fillText(this.text[i], this.uiAttr.dx, this.uiAttr.dy + i * (5 + fontSize));
    }
  }

  onClick() {
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
  }
}