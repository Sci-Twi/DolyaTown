import { dungeon } from "../dungeon.js";
import { terrain } from "../levels/terrain.js";
import { getLanguage } from "../text/language.js";
import { texts } from "../text/text.js";
import { autoNewLined } from "../text/tool.js";
import { canvas, ctx } from "../tools/canvas.js";
import { device } from "../tools/device.js";
import { input } from "../tools/input.js";
import { textureCache } from "../tools/textureCache.js";
import { UI, UISprite } from "./ui.js";
import { renderWindow } from "./win.js";


const pixelSize = 6;
const triangleLength = pixelSize * 6;

export class Description {
  uiAttr;

  text;
  showing;

  constructor(name, showing) {
    this.uiAttr = new UI();
    this.uiAttr.linkSprite(DescriptionSprite);

    this.name = name;

    const relativeX = 0.7;

    // TODO: ctx.store
    const fontSize = 30;

    // runs
    let npcText;
    let text;
    
    if (name === "terrain") {
      // if (texts[getLanguage()][name][showing]) {
      //   // npcText = {name: };
      // }
      npcText = texts[getLanguage()][name].blocks[showing];
      if (!npcText) {
        npcText = {name: "未填充", description: "看到了提醒作者修复"};
      }
      if (!npcText?.description) {
        text = texts[getLanguage()][name].default;
      } else {
        text = npcText.description;
      }
    } else {
      npcText = texts[getLanguage()][name].text;
      text = npcText.description;
    }

    


    this.displayName = npcText.name;
    // const txt = "这是超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级超级v长的一行测试文本";
    // ctx.textBaseline = "top";
    // ctx.fillStyle = "white";
    // ctx.font = fontSize + "px sans-serif";

    // hardcoded for now
    this.uiAttr.dx = Math.floor(device.width * (1 - relativeX) / 2);

    this.rowSideLength = Math.floor(device.width * relativeX - triangleLength * 2);
    // measureText here?
    this.columnSideLength = Math.floor((Math.ceil(text.length * fontSize / this.rowSideLength) + 1.5) * fontSize + pixelSize * 16);

    this.uiAttr.dWidth = triangleLength * 2 + this.rowSideLength;
    this.uiAttr.dHeight = triangleLength * 2 + this.columnSideLength;

    this.uiAttr.dy = Math.floor((device.height - this.uiAttr.dHeight - triangleLength * 2) / 2);


    this.text = autoNewLined(text, Math.floor(this.rowSideLength / fontSize));
    
    input.addLayer(descriptionClick);

    this.showing = showing;
    // console.log(this.showing)
    // this.contentLength = ctx.measureText(txt).width;

    // const relativeWidth = 0.4;
    // const relativeHeight = 0.6;


    // this.uiAttr.dy = relativeY * device.height;

    // this.uiAttr.dWidth = triangleLength * 2 + this.padding;
    // this.uiAttr.dHeight = triangleLength * 2 + 30;
    // this.uiAttr.dHeight = 

  }

  render() {
    const texture = textureCache.getTexture(this.uiAttr.sprite.getTextureName());
    const uiSprite = this.uiAttr.sprite.uiSprite;

    // const pixelSize = 6;
    renderWindow(texture.canvas, uiSprite.sx, uiSprite.sy, 6, 8, 8, this.uiAttr.dx, this.uiAttr.dy, triangleLength, this.rowSideLength, this.columnSideLength);
    

    

    for (let i = 0; i < this.text.length; i++) {
      ctx.fillText(this.text[i], this.uiAttr.dx + 6 * pixelSize, this.uiAttr.dy + 6 * pixelSize + 16 * pixelSize + 3 * pixelSize + i * 6 * pixelSize);
    }

    ctx.save();
    ctx.fillStyle = "yellow";
    ctx.font = `${pixelSize * 8}px sans-serif`;
    ctx.fillText(this.displayName, this.uiAttr.dx + 6 * pixelSize + 16 * pixelSize + 3 * pixelSize, this.uiAttr.dy + 6 * pixelSize);
    ctx.restore();

    // maybe another way...too lazy
    if (this.name === "terrain") {
      if (this.showing === terrain.shadow) {
        ctx.save();
        ctx.fillStyle = "black";
        ctx.fillRect(this.uiAttr.dx + triangleLength, this.uiAttr.dy + triangleLength, pixelSize * 16, pixelSize * 16);
        ctx.restore();
        return;
      }
      const textureCanvas = textureCache.getTexture(dungeon.level.getTextureName()).canvas;
      const source = textureCache.calcSourceCoor(this.showing, textureCanvas.width);
      canvas.draw(textureCanvas, ...source, 16, 16, this.uiAttr.dx + triangleLength, this.uiAttr.dy + triangleLength, pixelSize * 16, pixelSize * 16);
      return;
    }
    
    // can be optimized
    const textureCanvas = textureCache.getTexture(this.name).canvas;
    let index = Math.min(this.showing.current.frames.length - 1, this.showing.index);
    const source = textureCache.calcSourceCoor(this.showing.current.frames[index], textureCanvas.width);
    canvas.draw(textureCanvas, ...source, 16, 16, this.uiAttr.dx + triangleLength, this.uiAttr.dy + triangleLength, pixelSize * 16, pixelSize * 16);
    
    // if in description render it by the way
    // if (sprite.inDescription) {
    //   const description = dungeon.level.levelAttr.ui.find((ui) => ui instanceof Description);
    //   canvas.draw(textureCanvas, ...source, 16, 16, description.uiAttr.dx, description.uiAttr.dy, 6 * 16, 6 * 16);
    //   console.log(description)
    // }
  }

  onClick() {
    return true;
  }
}

function descriptionClick() {
  closeDescription();
  input.deleteLayer(descriptionClick);
  return true;
}

function closeDescription() {
  // bad
  dungeon.level.levelAttr.ui = dungeon.level.levelAttr.ui.filter((u) => !(u instanceof Description));
  // dungeon.level.levelAttr.ui.
}




class DescriptionSprite {
  uiSprite;

  constructor() {
    this.uiSprite = new UISprite();
    
    this.uiSprite.sx = 0;
    this.uiSprite.sy = 0;

    // unused
    // this.uiSprite.sWidth = 20;
    // this.uiSprite.sHeight = 25;
  }

  getTextureName() {
    return "chrome";
  }
}