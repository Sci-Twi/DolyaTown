import { npcMap } from "./dolya.js";
import { device } from "../tools/device.js";
import { debug } from "../tools/debug.js";
import { camera, gameScene, pixelSize } from "../scenes/gameScene.js";
import { textureCache } from "../tools/textureCache.js";
import { checkFlag, flags } from "../levels/terrain.js";
import { dungeon } from "../dungeon.js";



export default class GameView {
  game;

  #npcCanvas;
  ntx;

  // currentShadow;
  #tempCanvas;
  #tempCtx;

  sight;
  #NPCAnimation;
  currentAnimation;

  constructor(game) {
    this.game = game;
    this.sight = 6;

    this.#NPCAnimation = new NPCAnimationController({
      view: this,
    });
    
    // this.oldPlayer = [];
    this.currentAnimation = null;
    
    this.#npcCanvas = document.getElementById("npc");
    this.#npcCanvas.width = device.width;
    this.#npcCanvas.height = device.height;

    
    this.shadowCanvas = document.getElementById("shadow");
    this.shadowCanvas.width = device.width;
    this.shadowCanvas.height = device.height;

    this.ntx = this.#npcCanvas.getContext("2d");
    this.ntx.imageSmoothingEnabled = false;
    this.stx = this.shadowCanvas.getContext("2d");
    this.#tempCanvas = document.getElementById("temp");
    this.#tempCtx = this.#tempCanvas.getContext("2d");
  }
  
  yell({name, yells}) {
    document.getElementById("yell").innerText = `${name}： ${yells[Math.floor(Math.random() * yells.length)]}`;  
  }

  

  removeWindowHandler = () => {
    const windowCanvas = document.getElementById("windowcanvas");
    windowCanvas.getContext("2d").clearRect(0, 0, windowCanvas.width, windowCanvas.height);
    
    document.getElementById("windowdescription").innerText = "";
    document.getElementById("windowname").innerText = "";
    document.getElementById("windowanimation").getContext("2d").clearRect(0, 0, 96, 96);
    this.currentAnimation = null;
    this.initClick();
    document.getElementById("canvasback").removeEventListener(device.clickName, this.removeWindowHandler);

  }



  // to be removed to shadow class?
  renderShadow() {
    if (debug.lightMode) {
      return;
    }
    const shadow = dungeon.level.levelAttr.shadow;

    const num = pixelSize;
    const shadowCanvas = this.shadowCanvas;
    const gamecore = this.game.gamecore;
    let startX = ((shadowCanvas.width - num * 16) / 2) % (num * 16);
    let startY = ((shadowCanvas.height - num * 16) / 2) % (num * 16);
    startX = startX === 0 ? startX : startX  - num * 16;
    startY = startY === 0 ? startY : startY  - num * 16;

    const widthNumber = Math.ceil(((shadowCanvas.width - num * 16) / 2) / (num * 16));
    const heightNumber = Math.ceil(((shadowCanvas.height - num * 16) / 2) / (num * 16));
    const coorStartX = camera[0] - widthNumber;
    const coorStartY = camera[1] - heightNumber;

    
    this.stx.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);


    shadow.scanAllSector(...dungeon.hero.character.pos, this.sight);
    // holy i swear i will redo this later

    const invisible = [0, 0, 0, 255];
    const visited = [17, 17, 17, 204];
    const visible = [0, 0, 0, 0];

    // const camera = gameScene.getCamera();

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
    this.#tempCtx.putImageData(shadowArray, 0, 0);
    this.stx.drawImage(this.#tempCanvas, 0, 0, width1, height1, startX - num * 8, startY - num * 8, width1 * pixelSize * 16, height1 * pixelSize * 16);
    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#tempCanvas.height);

  }


  renderNPC() {
    const num = pixelSize;
    const npcCanvas = this.#npcCanvas;
    let startX = ((npcCanvas.width - num * 16) / 2) % (num * 16);
    let startY = ((npcCanvas.height - num * 16) / 2) % (num * 16);
    startX = startX === 0 ? startX : startX  - num * 16;
    startY = startY === 0 ? startY : startY  - num * 16;
    
    const widthNumber = Math.ceil(((npcCanvas.width - num * 16) / 2) / (num * 16));
    const heightNumber = Math.ceil(((npcCanvas.height - num * 16) / 2) / (num * 16));
    const coorStartX = camera[0] - widthNumber;
    const coorStartY = camera[1] - heightNumber;
    this.ntx.clearRect(0, 0, npcCanvas.width, npcCanvas.height);


    for (let y = coorStartY; y <= heightNumber + camera[1]; y++) {
      for (let x = coorStartX; x <= widthNumber + camera[0]; x++) {
        const npc = this.game.gamecore.getNPC([x, y]);
        if (!npc) {
          continue;
        }
        
        if (!debug.lightMode && !dungeon.level.levelAttr.shadow.isLit(x, y)) {
          continue;
        }

        this.#NPCAnimation.add({
          name: npc.name,
          texture: npc.texture,
          sx: (x - coorStartX) * 16 * num + startX,
          sy: (y - coorStartY) * 16 * num + startY,
        });

      }
    }
    this.#NPCAnimation.stop();
    this.#NPCAnimation.merge();

    // in the future...
    this.#NPCAnimation.start();
  }

  renderGame() {
    this.renderShadow();
    this.renderNPC();

  }




  renderNPCBlock({writer, name, sx, sy, id}) {
    const ps = pixelSize;
    const textureCanvas = textureCache.getTexture(name).canvas;
    const source = textureCache.calcSourceCoor(id, textureCanvas.width);
    writer.clearRect(sx, sy, ps * 16, ps * 16);
    writer.save();
    if (textureCache.getTexture(name).reversed) {
      writer.translate(sx + ps * 16, 0);
      writer.scale(-1, 1);
      // stupid but running
      writer.drawImage(textureCanvas, ...source, 16, 16, 0, sy, ps * 16, ps * 16);
    } else {
      writer.drawImage(textureCanvas, ...source, 16, 16, sx, sy, ps * 16, ps * 16);
    }
    writer.restore();
  }


  move(move) {
    this.game.gamecore.move(move);
    const player = dungeon.hero.character.pos;


    gameScene.setCamera(...player);
    gameScene.updateCellView();
    
    // too specific
    if (move[0] > 0) {
      textureCache.getTexture("hmdzl001").reversed = false;
    } else if (move[0] < 0) {
      textureCache.getTexture("hmdzl001").reversed = true;
    }
    this.renderGame();
  }


  resize(isBigger) {
    let num = pixelSize;
    if (isBigger) {
      if (num === 16) {
        return;
      }
      num += 1;
    } else {
      if (num === 1) {
        return;
      }
      num -= 1;
    }
    // pixelSize = num;
    gameScene.setPixelSize(num);
    gameScene.updateCellView();
    this.renderGame();
  }

  initResize() {
    document.getElementById("canvasback").addEventListener("wheel", (event) => {
      this.resize(event.deltaY < 0);
    });
  }


  initClick() {
    document.getElementById("canvasback").addEventListener(device.clickName, this.mapClickHandler);

  }

  mapClickHandler = (event) => {
    const gamecore = this.game.gamecore;
    const midX = device.width / 2;
    const midY = device.height / 2;
    const num = pixelSize * 16;

    // bro...
    let clientX = event.clientX;
    let clientY = event.clientY;
    if (device.isPhone) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }
    
    const biasX = Math.floor((clientX - midX - num / 2) / num) + 1;
    const biasY = Math.floor((clientY - midY - num / 2) / num) + 1;

    const [cx, cy] = camera;
    const tobe = [cx + biasX, cy + biasY];

    const visited = dungeon.level.levelAttr.visited.get(...tobe);
    
    const isBlockEmpty = checkFlag(dungeon.level.levelAttr.map.get(...tobe), flags.passable);
    
    // if (debug.lightMode) return;
    if (dungeon.level.levelAttr.shadow.isLit(cx + biasX, cy + biasY)) {
      const isNPCEmpty = !gamecore.getNPC(tobe);
      if (!isNPCEmpty) {
        gamecore.npcClickHandler({to: [cx + biasX, cy + biasY]});
        return;
      }
    }

    if (isBlockEmpty) {
      if (!visited && !debug.lightMode) {
        return;
      }
      gamecore.blockClickHandler({to: [cx + biasX, cy + biasY]});
      return;
    }
  }




  // sadly, no dragging for now
  // initDrag() {
  // }
}

class NPCAnimationController {
  constructor({view}) {
    this.animationList = {};
    this.animation = new Animation(this);
    
    this.gameview = view;

    
  }
  merge() {
    for (const npc in this.animationList) {
      const animate = this.animationList[npc];
      if (!animate.dontdelete) {
        delete this.animationList[npc];
      }
    }
  }
  stop() {
    this.animation.stop();
    this.animation = new Animation(this);
  }
  start() {
    this.animation.start();
    for (const npc in this.animationList) {
      this.animationList[npc].dontdelete = false;
    }
  }

  add({name, texture, sx, sy}) {
    let animate = this.animationList[name];
    if (!animate) {
      this.animationList[name] = {texture, sx, sy, index: 0, dontdelete: true, delay: 0};
    } else {
      animate.sx = sx;
      animate.sy = sy;
      animate.dontdelete = true;
    }

    animate = this.animationList[name];
    let frameIndex = 0;
    
    // not good
    const frames = npcMap[texture].animation.idle.frames;

    if (frames.length > animate.index) {
      frameIndex = frames[animate.index];
    }

    const gameview = this.gameview;
    gameview.renderNPCBlock({
      id: frameIndex,
      name: texture,
      writer: gameview.ntx,
      sx,
      sy,
    });

  }
}


class Animation {
  stoped;
  controller;
  now;

  constructor(npcAnimationController) {
    this.controller = npcAnimationController;
    this.stoped = false;
    
    this.now = 0;
    
  }

  stop() {
    this.stoped = true;
  }

  start() {
    requestAnimationFrame(() => {
      this.animate();
    });
  }

  updateStep() {

    const now = window.performance.now();
    const step = now - this.now;
    this.step = step;
    this.now = now;

  }

  animate() {
    this.updateStep();
    const gameview = this.controller.gameview;

    for (const npc in this.controller.animationList) {
      
      const animate = this.controller.animationList[npc];
      const texture = animate.texture;
      const frames = npcMap[texture].animation.idle.frames;


      const delay = 1 / npcMap[texture].animation.idle.hz * 1000;
      if (animate.delay < delay) {
        animate.delay += this.step;
        continue;
      }
      animate.delay = 0;

      if (frames.length <= animate.index) {
        animate.index = 0;
      }

      // not good
      if (gameview.currentAnimation === texture) {
        gameview.renderNPCBlock({
          id: animate.index,
          name: texture,
          writer: document.getElementById("windowanimation").getContext("2d"),
          sx: 0,
          sy: 0,
        });
      }
      this.controller.gameview.renderNPCBlock({
        id: frames[animate.index],
        name: texture,
        writer: this.controller.gameview.ntx,
        sx: animate.sx,
        sy: animate.sy,
      });
      animate.index += 1;
    }
    
    if (!this.stoped) {
      requestAnimationFrame(() => {
        this.animate();
      });
    }
  }

  
}
