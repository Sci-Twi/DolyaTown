// export {GameView};
import {blockMap, npcMap, Block} from "./dolya.js";
import {screen} from "../service/screen.js";

export default class GameView {
  game;
  pixelSize;
  #camera;
  #mapCanvas;
  mtx;

  #npcCanvas;
  ntx;


  #blockCanvas;
  #bctx;

  currentShadow;
  mapRenderData;
  npcRenderData;
  #tempCanvas;
  #tempCtx;

  hzTimes;
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
    this.hzTimes = 1;

    this.#NPCAnimation = new NPCAnimationController({
      view: this,
    });

    this.#blockCanvas = [];
    this.#bctx = [];
    
    this.oldPlayer = [];
    this.currentAnimation = null;

    

    
    // this.#mapCanvas = document.getElementById("block");
    this.#mapCanvas = screen.getScreen();
    // this.#mapCanvas.width = window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1;
    // this.#mapCanvas.height = window.innerHeight % 2 === 0 ? window.innerHeight : window.innerHeight + 1;
    
    this.#npcCanvas = document.getElementById("npc");
    this.#npcCanvas.width = this.#mapCanvas.width;
    this.#npcCanvas.height = this.#mapCanvas.height;

    
    this.shadowCanvas = document.getElementById("shadow");
    this.shadowCanvas.width = this.#mapCanvas.width;
    this.shadowCanvas.height = this.#mapCanvas.height;

    this.mtx = this.#mapCanvas.getContext("2d");
    this.ntx = this.#npcCanvas.getContext("2d");
    this.stx = this.shadowCanvas.getContext("2d");
    this.#tempCanvas = document.getElementById("temp");
    this.#tempCtx = this.#tempCanvas.getContext("2d");
    this.mapRenderData = {};
    this.npcRenderData = {};
  }

  initWindow() {
    const windowCanvas = document.getElementById("windowcanvas");
    windowCanvas.width = Math.floor(this.#mapCanvas.width * 0.8);
    windowCanvas.style.left = Math.floor(this.#mapCanvas.width * 0.1) + "px";

    const num = 6;
    const longSide = windowCanvas.width - num * 5 * 2;

    const windowName = document.getElementById("windowname");
    windowName.style.left = num * 18 + "px";
    windowName.style.fontSize = num * 9 + "px";
    
    const windowContent = document.getElementById("windowcontent");
    windowContent.style.width = longSide - num * 2 + "px";
    windowContent.style.left = Math.floor(this.#mapCanvas.width * 0.1) + num * 6 + "px";

    
    const windowAnimation = document.getElementById("windowanimation");
    windowAnimation.width = num * 16;
    windowAnimation.height = num * 16;

  }
  

  yell({name, yells}) {
    document.getElementById("yell").innerText = `${name}： ${yells[Math.floor(Math.random() * yells.length)]}`;  
  }

  renderWindow({name, description}) {

    // shit codes here
    const windowCanvas = document.getElementById("windowcanvas");
    const wtx = windowCanvas.getContext("2d");
  
    const num = 6;



    document.getElementById("windowdescription").innerText = description;
    document.getElementById("windowname").innerText = name;

    // silly b, so many hardcoded shit
    if (name === "hmdzl001") {
      if (this.game.phone.isPhone) {
        document.getElementById("windowdescription").innerText += "\n\n点击交互 右上角缩放";
      } else {
        document.getElementById("windowdescription").innerText += "\n\nwsad移动视角 点击交互 ↑↓←→行走 鼠标滚轮缩放";
      }
      document.getElementById("windowdescription").innerText += "\n项目地址：https://github.com/Sci-Twi/DolyaTown";
    }


    const longSide = windowCanvas.width - num * 5 * 2;
    const shortSide = Math.ceil(document.getElementById("windowdescription").offsetHeight) + num * 18;
    windowCanvas.height = shortSide + num * 5 * 2;
    

    windowCanvas.style.top = Math.floor((this.#mapCanvas.height - (shortSide + num * 5 * 2)) / 2) + "px";


    const windowContent = document.getElementById("windowcontent");
    windowContent.style.height = shortSide - num * 2 + "px";
    windowContent.style.top = windowCanvas.offsetTop + num * 6 + "px";
    
    // do we really need this?

    const renderMid = (sx, sy) => {
      wtx.fillStyle = "#393B35";
      wtx.fillRect(sx, sy, longSide + num * 2, shortSide + num * 2);
      wtx.fillStyle = "#3B3D37";
      wtx.fillRect(sx + num, sy + num, longSide, shortSide);
      wtx.fillStyle = "#3E4039";
      wtx.fillRect(sx + num * 2, sy + num * 2, longSide - num * 2, shortSide - num * 2);
    };

    const renderAngle = (sx, sy) => {
      wtx.fillStyle = "#63665C";
      wtx.fillRect(sx, sy, 5 * num, 5 * num);
      wtx.fillStyle = "#A0A695";
      wtx.fillRect(sx, sy, 4 * num, 4 * num);
      wtx.fillStyle = "#63665C";
      wtx.fillRect(sx + num, sy + num, 2 * num, 2 * num);
      wtx.fillStyle = "#7B8073";
      wtx.fillRect(sx, sy + 4 * num, num, num);
      wtx.fillRect(sx + num, sy + 3 * num, num, num);
      wtx.fillRect(sx + 2 * num, sy + 2 * num, num, num);
      wtx.fillRect(sx + 3 * num, sy + num, num, num);
      wtx.fillRect(sx + 4 * num, sy, num, num);
    };

    const renderLongSide = (sx, sy) => {
      wtx.fillStyle = "#A0A695";
      wtx.fillRect(sx, sy + num, longSide, num);
      wtx.fillStyle = "#7B8073";
      wtx.fillRect(sx, sy + 2 * num, longSide, num);
      wtx.fillStyle = "#63665C";
      wtx.fillRect(sx, sy + 3 * num, longSide, num);
    };

    const renderShortSide = (sx, sy) => {
      wtx.fillStyle = "#A0A695";
      wtx.fillRect(sx + num, sy, num, shortSide);
      wtx.fillStyle = "#7B8073";
      wtx.fillRect(sx + 2 * num, sy, num, shortSide);
      wtx.fillStyle = "#63665C";
      wtx.fillRect(sx + 3 * num, sy, num, shortSide);
    };

    renderMid(num * 4, num * 4);
    renderAngle(0, 0);
    renderAngle(num * 5 + longSide, 0);
    renderAngle(0, num * 5 + shortSide);
    renderAngle(num * 5 + longSide, num * 5 + shortSide);
    renderLongSide(5 * num, 0);
    renderLongSide(5 * num, 5 * num + shortSide);
    renderShortSide(0, 5 * num);
    renderShortSide(5 * num + longSide, 5 * num);

    const click = this.game.phone.click;
    document.getElementById("canvasback").removeEventListener(click, this.mapClickHandler);
    document.getElementById("canvasback").addEventListener(click, this.removeWindowHandler);
  }

  removeWindowHandler = () => {
    const windowCanvas = document.getElementById("windowcanvas");
    windowCanvas.getContext("2d").clearRect(0, 0, windowCanvas.width, windowCanvas.height);
    
    document.getElementById("windowdescription").innerText = "";
    document.getElementById("windowname").innerText = "";
    document.getElementById("windowanimation").getContext("2d").clearRect(0, 0, 96, 96);
    this.currentAnimation = null;
    this.initClick();
    document.getElementById("canvasback").removeEventListener(this.game.phone.click, this.removeWindowHandler);

  }

  initMap() {
    [1, 2, 3, 4, 8].map((num) => {

      const blockCanvas = document.createElement("canvas");
      blockCanvas.style.display = "none";
      document.getElementById("canvasback").append(blockCanvas);
      const bctx = blockCanvas.getContext("2d", {"willReadFrequently": true});

      blockCanvas.width = 48 * 16 * num;
      blockCanvas.height = 48 * 16 * num;
      
      
      this.#blockCanvas[num] = blockCanvas;
      this.#bctx[num] = bctx;

      this.preRenderMap({
        ctx: bctx,
        pixelSize: num,
      });
      

    });
  }

  preRenderMap({ctx, pixelSize}) {

    for (let y = 0; y < 48; y++) {
      for (let x = 0; x < 48; x++) {
        const block = this.game.gamecore.getBlock([x, y]);
        if (!block) {
          continue;
        }
        this.renderSingleBlockByS({
          ctx,
          imgData: this.mapRenderData[block.name],
          pixelSize,
          sx: x * 16 * pixelSize,
          sy: y * 16 * pixelSize,
        });
      }
    }


  }

  renderMapByCut() {
    const num = this.pixelSize;
    const bctx = this.#bctx[num];

    const sx = this.#camera[0] * 16 * num + 16 / 2 * num - this.#mapCanvas.width / 2;
    const sy = this.#camera[1] * 16 * num + 16 / 2 * num - this.#mapCanvas.height / 2;

    this.mtx.clearRect(0, 0, this.#mapCanvas.width, this.#mapCanvas.height);
    const mapData = bctx.getImageData(sx, sy, this.#mapCanvas.width, this.#mapCanvas.height);
    this.mtx.putImageData(mapData, 0, 0);

  }

  renderMapByWrite() {
    const num = this.pixelSize;
    const mapCanvas = this.#mapCanvas;

    let startX = ((mapCanvas.width - num * 16) / 2) % (num * 16);
    let startY = ((mapCanvas.height - num * 16) / 2) % (num * 16);
    startX = startX === 0 ? startX : startX  - num * 16;
    startY = startY === 0 ? startY : startY  - num * 16;

    
    const widthNumber = Math.ceil(((mapCanvas.width - num * 16) / 2) / (num * 16));
    const heightNumber = Math.ceil(((mapCanvas.height - num * 16) / 2) / (num * 16));
    
    this.mtx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
    const coorStartX = this.#camera[0] - widthNumber;
    const coorStartY = this.#camera[1] - heightNumber;


    

    for (let y = coorStartY; y <= heightNumber + this.#camera[1]; y++) {
      for (let x = coorStartX; x <= widthNumber + this.#camera[0]; x++) {
        const block = this.game.gamecore.getBlock([x, y]);
        if (!block) {
          continue;
        }

        const sx = (x - coorStartX) * 16 * num + startX;
        const sy = (y - coorStartY) * 16 * num + startY;
        this.renderMapBlock({
          imgData: this.mapRenderData[block.name],
          sx,
          sy,
        });




      }
    }
  }


  // to be removed to shadow class?
  renderShadow() {
    if (this.game.lightMode) {
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
    // ok i give up

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

  renderShadowBlock({sx, sy}) {
    this.stx.clearRect(sx, sy, this.pixelSize * 16, this.pixelSize * 16);
  }

  renderBlackBlock({sx, sy}) {
    this.stx.fillStyle = "black";
    this.stx.fillRect(sx, sy, this.pixelSize * 16, this.pixelSize * 16);
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
        
        if (!this.game.lightMode && !this.currentShadow.isLit(x, y)) {
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
    if (this.pixelSize <= 8) {
      this.renderMapByCut();
    } else {
      this.renderMapByWrite();
    }
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


  renderMapBlock({imgData, sx, sy}) {
    if (this.pixelSize === 1) {
      this.mtx.putImageData(imgData, sx, sy);
      return;
    }

    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const index = (y * 16 + x);
        this.mtx.fillStyle = `rgb(${imgData.data[index * 4]}, ${imgData.data[index * 4 + 1]}, ${imgData.data[index * 4 + 2]})`;
        this.mtx.fillRect(sx + x * this.pixelSize, sy + y * this.pixelSize, this.pixelSize, this.pixelSize);

      }
    }
  }
  

  renderSingleBlockByS({ctx, imgData, sx, sy, pixelSize}) {
    if (pixelSize === 1) {
      ctx.putImageData(imgData, sx, sy);
      return;
    }

    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const index = (y * 16 + x);
        ctx.fillStyle = `rgb(${imgData.data[index * 4]}, ${imgData.data[index * 4 + 1]}, ${imgData.data[index * 4 + 2]})`;
        ctx.fillRect(sx + x * pixelSize, sy + y * pixelSize, pixelSize, pixelSize);
      }
    }
  }

  

  move(move) {
    this.game.gamecore.move(move);
    const player = this.game.gamecore.player;
    this.#camera[0] = player[0];
    this.#camera[1] = player[1];
    
    // too specific
    if (move[0] > 0) {
      this.npcRenderData["hmdzl001"].reverseTexture = false;
    } else if (move[0] < 0) {
      this.npcRenderData["hmdzl001"].reverseTexture = true;
    }
    this.renderGame();
  }

  moveView(move) { // [x, y]

    const [originX, originY] = this.#camera;
    const toX = move[0] + originX;
    const toY = move[1] + originY;

    if (toX <= 0 || toX > 48 || toY <= 0 || toY > 48) {
      return;
    }

    this.#camera[0] = toX;
    this.#camera[1] = toY;

    this.renderGame();

  }


  resize(isBigger) {
    const num = this.pixelSize;

    if (isBigger) {
      if (num < 4) {
        this.pixelSize += 1;
      } else if (num < 8) {
        this.pixelSize += 4;
      } else if (num < 16){
        this.pixelSize += 4;
      } else {
        return;
      }
    } else {
      if (num > 8) {
        this.pixelSize -= 4;
      } else if (num > 4) {
        this.pixelSize -= 4;
      } else if (num > 1) {
        this.pixelSize -= 1;
      } else {
        return;
      }

    }
    this.renderGame();
  }


  initRenderData() {
    for (const block in blockMap) {
      const textureName = blockMap[block].name;
      this.#tempCtx.drawImage(document.getElementById("water0"), 0, 0);
      const image = document.getElementById(textureName);
      this.#tempCtx.drawImage(image, 0, 0);
      this.mapRenderData[textureName] = this.#tempCtx.getImageData(0, 0, 16, 16);
    }

    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#mapCanvas.height);

    for (const npc in npcMap) {
      const textureName = npcMap[npc].name;
      this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#mapCanvas.height);
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
    
    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#mapCanvas.height);
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

  initKeyboard() {
    document.addEventListener("keydown", (event) => {
      if (event.repeat) {
        return;
      }
      switch (event.key.toLowerCase()) {
        case "w":
          this.moveView([0, -1]);
          break;
        case "s":
          this.moveView([0, 1]);
          break;
        case "a":
          this.moveView([-1, 0]);
          break;
        case "d":
          this.moveView([1, 0]);
          break;
        case "arrowup":
          this.move([0, -1]);
          break;
        case "arrowdown":
          this.move([0, 1]);
          break;
        case "arrowleft":
          this.move([-1, 0]);
          break;
        case "arrowright":
          this.move([1, 0]);
          break;
        default:
          return;
      }
    });
  }

  initClick() {
    document.getElementById("canvasback").addEventListener(this.game.phone.click, this.mapClickHandler);

  }

  mapClickHandler = (event) => {
    const gamecore = this.game.gamecore;
    const midX = this.#mapCanvas.width / 2;
    const midY = this.#mapCanvas.height / 2;
    const num = this.pixelSize * 16;

    // bro...
    let clientX = event.clientX;
    let clientY = event.clientY;
    if (this.game.phone.isPhone) {
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
      if (!block.isVisited && !this.game.lightMode) {
        return;
      }
      gamecore.blockClickHandler({to: [cx + biasX, cy + biasY]});
      return;
    }

  }


  initHz() {
    let now;
    const past = performance.now();
    requestAnimationFrame(() => {
      now = performance.now();
      // considering about performance...maybe round
      let onehz = (1000 / (now - past) / 60);
      this.hzTimes = onehz;
    });

  }


  // sadly, no dragging for now
  initDrag() {
  }
}

class NPCAnimationController {
  // #animation;
  // #newAnimationList;
  // #stop;
  // #stoped;
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
      this.animationList[name] = {texture, sx, sy, index: 0, hz: 0, dontdelete: true};
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
  constructor(npcAnimationController) {
    this.controller = npcAnimationController;
    this.stoped = false;
  }

  stop() {
    this.stoped = true;
  }

  start() {
    requestAnimationFrame(() => {
      this.animate();
    });
  }

  animate() {
    const gameview = this.controller.gameview;

    for (const npc in this.controller.animationList) {
      
      const animate = this.controller.animationList[npc];
      const texture = animate.texture;
      const hz = 60 / npcMap[texture].animation.idle.hz;
      const frames = npcMap[texture].animation.idle.frames;



      if (animate.hz < hz * gameview.hzTimes) {
        animate.hz += 1;
        continue;
      }
      animate.hz = 0;
      
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


// wanna rewrite to mine

class Shadow {
  static mult = [
    [1,  0,  0, -1, -1,  0,  0,  1],
    [0,  1, -1,  0,  0, -1,  1,  0],
    [0,  1,  1,  0,  0, -1, -1,  0],
    [1,  0,  0,  1, -1,  0,  0, -1]
  ]

  constructor({map, view, width, height}) {
    this.map = map;
    this.gameview = view;
    this.width = width;
    this.height = height;
    this.light = [];
    for (let i = 0; i < height; i++) {
      this.light[i] = new Array(width).fill(false);
    }
    this.flag = false;
  }

  blocked(x, y) {
    // here
    const blocked = x < 0 || y < 0 || x >= this.width || y >= this.height;
    if (blocked) {
      return true;
    }

    // ...bro
    const lightPass = this.map[y][x].lightPass;
    return !lightPass;
  }

  
  isLit(x, y) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return false;
    }
    return this.light[y][x] === this.flag;
  }
  setLit(x, y) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.light[y][x] = this.flag;
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
        // b r o
        
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
    
    this.flag = true;
    for (let oct = 0; oct < 8; oct++) {
      this.castLight(x, y, 1, 1, 0, radius, Shadow.mult[0][oct], Shadow.mult[1][oct], Shadow.mult[2][oct], Shadow.mult[3][oct], 0);
    }
    this.light[y][x] = true;
  }

  // static calcSectorShadow({blockMap, sx, sy, radius}) {

  //   // ok i gave up
  //   // maybe someday i will rewrite it to mine shadowcaster


  //   // temp

}