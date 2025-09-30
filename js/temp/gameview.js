// import { dungeon } from "../dungeon.js";
import { npcMap, Block } from "./dolya.js";
import { device } from "../tools/device.js";
// import { textureCache } from "../tools/textureCache.js";
// import { assets } from "../assets.js";
import { debug } from "../tools/debug.js";
import { Shadow } from "../mechanics/shadow.js";
import { gameScene } from "../scenes/gameScene.js";
// import { terrain } from "../terrain.js";
// import { canvas } from "../tools/canvas.js";



export default class GameView {
  game;
  pixelSize;
  #camera;
  // mapCanvas;
  // mtx;

  #npcCanvas;
  ntx;


  // #blockCanvas;
  // #bctx;

  currentShadow;
  // mapRenderData;
  npcRenderData;
  #tempCanvas;
  #tempCtx;

  // hzTimes;
  sight;
  #NPCAnimation;
  currentAnimation;

  constructor(game) {
    this.game = game;
    this.pixelSize = 8;
    this.sight = 6;
    const player = this.game.gamecore.player;
    this.#camera = [];
    this.#camera[0] = player[0];
    this.#camera[1] = player[1];
    // hz / 60
    // this.hzTimes = 1;

    this.#NPCAnimation = new NPCAnimationController({
      view: this,
    });

    // this.#blockCanvas = [];
    // this.#bctx = [];
    
    this.oldPlayer = [];
    this.currentAnimation = null;

    

    
    // this.mapCanvas = device.getDevice();

    
    this.#npcCanvas = document.getElementById("npc");
    this.#npcCanvas.width = device.width;
    this.#npcCanvas.height = device.height;

    
    this.shadowCanvas = document.getElementById("shadow");
    this.shadowCanvas.width = device.width;
    this.shadowCanvas.height = device.height;

    this.ntx = this.#npcCanvas.getContext("2d");
    this.stx = this.shadowCanvas.getContext("2d");
    this.#tempCanvas = document.getElementById("temp");
    this.#tempCtx = this.#tempCanvas.getContext("2d");
    // this.mapRenderData = {};
    this.npcRenderData = {};
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
    

    const num = this.pixelSize;
    const shadowCanvas = this.shadowCanvas;
    const gamecore = this.game.gamecore;
    let startX = ((shadowCanvas.width - num * 16) / 2) % (num * 16);
    let startY = ((shadowCanvas.height - num * 16) / 2) % (num * 16);
    startX = startX === 0 ? startX : startX  - num * 16;
    startY = startY === 0 ? startY : startY  - num * 16;

    const widthNumber = Math.ceil(((shadowCanvas.width - num * 16) / 2) / (num * 16));
    const heightNumber = Math.ceil(((shadowCanvas.height - num * 16) / 2) / (num * 16));
    const coorStartX = this.#camera[0] - widthNumber;
    const coorStartY = this.#camera[1] - heightNumber;

    this.stx.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);


    // temp...bruh
    if (this.oldPlayer[0] !== gamecore.player[0] || this.oldPlayer[1] !== gamecore.player[1]) {
      this.oldPlayer[0] = gamecore.player[0];
      this.oldPlayer[1] = gamecore.player[1];

      this.currentShadow = new Shadow({
        map: gamecore.blockmap,
        view: this,
        width: gamecore.worldSize[0],
        height: gamecore.worldSize[1],
      });
      this.currentShadow.scanAllSector(gamecore.player[0], gamecore.player[1], this.sight);
    }
    
    // holy i swear i will redo this later

    const invisible = [0, 0, 0, 255];
    const visited = [17, 17, 17, 204];
    const visible = [0, 0, 0, 0];

    const width1 = widthNumber + this.#camera[0] + 2 - coorStartX;
    const height1 = heightNumber + this.#camera[1] + 2 - coorStartY;

    const shadowArray = new ImageData(widthNumber + this.#camera[0] + 2 - coorStartX, heightNumber + this.#camera[1] + 2 - coorStartY);


    for (let y = coorStartY; y <= heightNumber + this.#camera[1] + 1; y++) {
      for (let x = coorStartX; x <= widthNumber + this.#camera[0] + 1; x++) {
        const b1 = gamecore.getBlock([x, y]);
        const b2 = gamecore.getBlock([x, y - 1]);
        const b3 = gamecore.getBlock([x - 1, y]);
        const b4 = gamecore.getBlock([x - 1, y - 1]);
        const index = (y - coorStartY) * (widthNumber + this.#camera[0] + 2 - coorStartX) + (x - coorStartX);
        let c = invisible;
        
        let isLit = this.currentShadow.isLit(x, y) && this.currentShadow.isLit(x, y - 1) && this.currentShadow.isLit(x - 1, y) && this.currentShadow.isLit(x - 1, y - 1);
        if (isLit) {
          // ugly
          if (b1) b1.isVisited = true;
          if (b2) b2.isVisited = true;
          if (b3) b3.isVisited = true;
          if (b4) b4.isVisited = true;
          c = visible;

        } else {
          if ((b1 && b2 && b3 && b4)) {
            if (!b1.isVisited || !b2.isVisited || !b3.isVisited || !b4.isVisited) {
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
    this.stx.drawImage(this.#tempCanvas, 0, 0, width1, height1, startX - num * 8, startY - num * 8, width1 * this.pixelSize * 16, height1 * this.pixelSize * 16);
    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#tempCanvas.height);

  }


  renderNPC() {
    const num = this.pixelSize;
    const npcCanvas = this.#npcCanvas;
    let startX = ((npcCanvas.width - num * 16) / 2) % (num * 16);
    let startY = ((npcCanvas.height - num * 16) / 2) % (num * 16);
    startX = startX === 0 ? startX : startX  - num * 16;
    startY = startY === 0 ? startY : startY  - num * 16;
    
    const widthNumber = Math.ceil(((npcCanvas.width - num * 16) / 2) / (num * 16));
    const heightNumber = Math.ceil(((npcCanvas.height - num * 16) / 2) / (num * 16));
    const coorStartX = this.#camera[0] - widthNumber;
    const coorStartY = this.#camera[1] - heightNumber;
    this.ntx.clearRect(0, 0, npcCanvas.width, npcCanvas.height);


    for (let y = coorStartY; y <= heightNumber + this.#camera[1]; y++) {
      for (let x = coorStartX; x <= widthNumber + this.#camera[0]; x++) {
        const npc = this.game.gamecore.getNPC([x, y]);
        if (!npc) {
          continue;
        }
        
        if (!debug.lightMode && !this.currentShadow.isLit(x, y)) {
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
    if (gameScene.tilesMap) gameScene.tilesMap.render();
    this.renderShadow();
    this.renderNPC();

  }

  


  renderNPCBlock({writer, imgData, sx, sy, reverseTexture, num}) {
    writer.clearRect(sx, sy, num * 16, num * 16);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        // const index = (y * 16 + x);
        let index = y * 16 + x;
        if (reverseTexture) {
          index = y * 16 + 15 - x;
        }

        if (imgData.data[index * 4 + 3] === 0) {
          continue;
        }
        writer.fillStyle = `rgb(${imgData.data[index * 4]}, ${imgData.data[index * 4 + 1]}, ${imgData.data[index * 4 + 2]})`;
        writer.fillRect(sx + x * num, sy + y * num, num, num);
      }
    }
  }


  move(move) {
    this.game.gamecore.move(move);
    const player = this.game.gamecore.player;
    this.#camera[0] = player[0];
    this.#camera[1] = player[1];
    // gameScene.camera[0] = player[0];
    gameScene.camera = [...player];
    
    // too specific
    if (move[0] > 0) {
      this.npcRenderData["hmdzl001"].reverseTexture = false;
    } else if (move[0] < 0) {
      this.npcRenderData["hmdzl001"].reverseTexture = true;
    }
    this.renderGame();
  }


  resize(isBigger) {
    const num = this.pixelSize;
    if (isBigger) {
      if (num === 16) {
        return;
      }
      this.pixelSize += 1;
    } else {
      if (num === 1) {
        return;
      }
      this.pixelSize -= 1;
    }
    gameScene.pixelSize = this.pixelSize;
    this.renderGame();
  }


  initRenderData() {

    for (const npc in npcMap) {
      const textureName = npcMap[npc].name;
      this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, device.height);
      const image = document.getElementById(textureName);
      this.#tempCtx.drawImage(image, 0, 0);
      const xLength = image.width / 16;
      const yLength = image.height / 16;
      this.npcRenderData[textureName] = {};
      const data = this.npcRenderData[textureName];
      data.data = [];
      data.reverseTexture = !!npcMap[npc].animation?.reverseTexture;
      for (let y = 0; y < yLength; y++) {
        for (let x = 0; x < xLength; x++) {
          data.data[yLength * y + x] = this.#tempCtx.getImageData(x * 16, y * 16, 16, 16);
        }
      }
    }
    
    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, device.height);
  }

  initResizeButton() {
    const button = document.getElementById("resizeButton");
    button.style.display = "block";
    const pixleTypes = [1, 2, 3, 4, 8, 12, 28];
    button.addEventListener("input", () => {
      this.pixelSize = pixleTypes[button.value];
      this.renderGame();
    });
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
    const num = this.pixelSize * 16;

    // bro...
    let clientX = event.clientX;
    let clientY = event.clientY;
    if (device.isPhone) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    }
    
    const biasX = Math.floor((clientX - midX - num / 2) / num) + 1;
    const biasY = Math.floor((clientY - midY - num / 2) / num) + 1;

    const [cx, cy] = this.#camera;
    const tobe = [cx + biasX, cy + biasY];

    const block = gamecore.getBlock(tobe);

    const isBlockEmpty = block?.type === Block.FLOOR;
    if (this.currentShadow.isLit(cx + biasX, cy + biasY)) {
      const isNPCEmpty = !gamecore.getNPC(tobe);
      if (!isNPCEmpty) {
        gamecore.npcClickHandler({to: [cx + biasX, cy + biasY]});
        return;
      }
    }

    if (isBlockEmpty) {
      if (!block.isVisited && !debug.lightMode) {
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
      this.animationList[name] = {texture, sx, sy, index: 0, hz: 0, dontdelete: true, delay: 0};
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
      writer: gameview.ntx,
      imgData: gameview.npcRenderData[texture].data[frameIndex],
      sx,
      sy,
      reverseTexture: gameview.npcRenderData[texture].reverseTexture,
      num: gameview.pixelSize,
    });

  }
}


class Animation {
  stoped;
  controller;
  now;
  stoped;

  constructor(npcAnimationController) {
    this.controller = npcAnimationController;
    this.stoped = false;
    
    this.now = 0;
    
  }

  // step() {
  // }

  stop() {
    this.stoped = true;
  }

  start() {
    requestAnimationFrame(() => {
      // if (gameScene.tilesMap) gameScene.tilesMap.render();
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
    // console.log(this.step);
    const gameview = this.controller.gameview;

    for (const npc in this.controller.animationList) {
      
      const animate = this.controller.animationList[npc];
      const texture = animate.texture;
      const hz = 60 / npcMap[texture].animation.idle.hz;
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
          writer: document.getElementById("windowanimation").getContext("2d"),
          imgData: gameview.npcRenderData[texture].data[frames[animate.index]],
          sx: 0,
          sy: 0,
          reverseTexture: gameview.npcRenderData[texture].reverseTexture,
          num: 6,
        });
      }
      this.controller.gameview.renderNPCBlock({
        writer: this.controller.gameview.ntx,
        imgData: this.controller.gameview.npcRenderData[texture].data[frames[animate.index]],
        sx: animate.sx,
        sy: animate.sy,
        reverseTexture: this.controller.gameview.npcRenderData[texture].reverseTexture,
        num: this.controller.gameview.pixelSize,
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
