class GameView {
  game;
  #pixelSize;
  // #worldSize;
  // #player;
  #camera;
  #mapCanvas;
  #mtx;

  #npcCanvas;
  #ntx;

  #blockCanvas;
  #bctx;


  #renderData;
  #tempCanvas;
  #tempCtx;
  #dragging;
  #resizeData;
  // #npcAnimation;

  constructor(game) {
    this.game = game;
    this.#pixelSize = 4;
    // this.#worldSize = this.game.gamecore.worldSize;
    // this.#player = this.game.gamecore.player;
    const player = this.game.gamecore.player;
    this.#camera = [];
    this.#camera[0] = player[0];
    this.#camera[1] = player[1];

    this.#resizeData = {};
    // this.#npcAnimation = [[], []];

    this.#blockCanvas = [];
    this.#bctx = [];

    

    
    this.#mapCanvas = document.getElementById("block");
    this.#mapCanvas.width = window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1;
    this.#mapCanvas.height = window.innerHeight % 2 === 0 ? window.innerHeight : window.innerHeight + 1;
    
    this.#npcCanvas = document.getElementById("npc");
    this.#npcCanvas.width = this.#mapCanvas.width;
    this.#npcCanvas.height = this.#mapCanvas.height;
    
    this.#mtx = this.#mapCanvas.getContext("2d");
    this.#ntx = this.#npcCanvas.getContext("2d");
    // this.#mtx.clearRect(0, 0, this.#mapCanvas.width, this.#mapCanvas.height);
    this.#tempCanvas = document.getElementById("temp");
    this.#tempCtx = this.#tempCanvas.getContext("2d");
    this.#renderData = {};
  }

  // screenToCoor(screen) {
    
  // }

  // coorToScreen(coor) {

  // }

  initMap() {
    [1, 2, 3].map((num) => {

      
      
      const blockCanvas = document.createElement("canvas");
      document.getElementById("canvasback").append(blockCanvas);
      const bctx = blockCanvas.getContext("2d", {"willReadFrequently": true});

      blockCanvas.width = 48 * 16 * num;
      blockCanvas.height = 48 * 16 * num;
      
      
      this.#blockCanvas[num] = blockCanvas;
      this.#bctx[num] = bctx;

      this.preRenderMap({
        blockCanvas,
        ctx: bctx,
        pixelSize: num,
      });
      

    });
    // this.#bctx = this.#blockCanvas.map((can) => {
    //   return can.getContext("2d");
    // });

    // this.#bctx.forEach((ctx) => {
    //   // ctx.clearRect(0, 0, );
      
    // });



    // this.#mtx.clearRect(0, 0, this.#mapCanvas.width, this.#mapCanvas.height);
    // const coorStartX = this.#camera[0] - this.#resizeData.widthNumber;
    // const coorStartY = this.#camera[1] - this.#resizeData.heightNumber;

    // for (let y = coorStartY; y <= this.#resizeData.heightNumber + this.#camera[1]; y++) {
    //   for (let x = coorStartX; x <= this.#resizeData.widthNumber + this.#camera[0]; x++) {
    //     const block = this.game.gamecore.getBlock([x, y]);
    //     if (!block) {
    //       continue;
    //     }
    //     this.renderMapBlock(this.#renderData[block.name], (x - coorStartX) * 16 * this.#pixelSize + this.#resizeData.startX, (y - coorStartY) * 16 * this.#pixelSize + this.#resizeData.startY);
    //   }
    // }

  }

  preRenderMap({blockCanvas, ctx, pixelSize}) {
    // ctx.clearRect(0, 0, blockCanvas.width, blockCanvas.height);
    // const coorStartX = this.#camera[0] - widthNumber;
    // const coorStartY = this.#camera[1] - heightNumber;


    for (let y = 0; y < 48; y++) {
        for (let x = 0; x < 48; x++) {
          const block = this.game.gamecore.getBlock([x, y]);
          if (!block) {
            continue;
          }
          this.renderSingleBlockByS({
            ctx,
            imgData: this.#renderData[block.name],
            pixelSize,
            sx: x * 16 * pixelSize,
            sy: y * 16 * pixelSize,
          });
        }
      }

    // for (let y = coorStartY; y <= this.#resizeData.heightNumber + this.#camera[1]; y++) {
    //   for (let x = coorStartX; x <= this.#resizeData.widthNumber + this.#camera[0]; x++) {
    //     const block = this.game.gamecore.getBlock([x, y]);
    //     if (!block) {
    //       continue;
    //     }
    //   }
    // }
  }

  renderMapByCut() {
    const num = this.#pixelSize;
    const bctx = this.#bctx[num];

    const sx = this.#camera[0] * 16 * num + 16 / 2 * num - this.#mapCanvas.width / 2;
    const sy = this.#camera[1] * 16 * num + 16 / 2 * num - this.#mapCanvas.height / 2;

    this.#mtx.clearRect(0, 0, this.#mapCanvas.width, this.#mapCanvas.height);
    const mapData = bctx.getImageData(sx, sy, this.#mapCanvas.width, this.#mapCanvas.height);
    this.#mtx.putImageData(mapData, 0, 0);

  }

  renderMapByWrite() {
    const num = this.#pixelSize;
    const mapCanvas = this.#mapCanvas;

    let startX = ((mapCanvas.width - num * 16) / 2) % (num * 16);
    let startY = ((mapCanvas.height - num * 16) / 2) % (num * 16);
    startX = startX === 0 ? startX : startX  - num * 16;
    startY = startY === 0 ? startY : startY  - num * 16;

    // console.log(startX, startY)
    const widthNumber = Math.ceil(((mapCanvas.width - num * 16) / 2) / (num * 16));
    const heightNumber = Math.ceil(((mapCanvas.height - num * 16) / 2) / (num * 16));
    
    this.#mtx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
    const coorStartX = this.#camera[0] - widthNumber;
    const coorStartY = this.#camera[1] - heightNumber;

    for (let y = coorStartY; y <= heightNumber + this.#camera[1]; y++) {
      for (let x = coorStartX; x <= widthNumber + this.#camera[0]; x++) {
        const block = this.game.gamecore.getBlock([x, y]);
        if (!block) {
          continue;
        }
        this.renderMapBlock({
          imgData: this.#renderData[block.name],
          sx: (x - coorStartX) * 16 * num + startX,
          sy: (y - coorStartY) * 16 * num + startY,
        });
      }
    }
  }




  renderNPC() {
    const num = this.#pixelSize;
    const npcCanvas = this.#npcCanvas;
    let startX = ((npcCanvas.width - num * 16) / 2) % (num * 16);
    let startY = ((npcCanvas.height - num * 16) / 2) % (num * 16);
    startX = startX === 0 ? startX : startX  - num * 16;
    startY = startY === 0 ? startY : startY  - num * 16;
    
    const widthNumber = Math.ceil(((npcCanvas.width - num * 16) / 2) / (num * 16));
    const heightNumber = Math.ceil(((npcCanvas.height - num * 16) / 2) / (num * 16));
    const coorStartX = this.#camera[0] - widthNumber;
    const coorStartY = this.#camera[1] - heightNumber;
    this.#ntx.clearRect(0, 0, this.#npcCanvas.width, this.#npcCanvas.height);

    for (let y = coorStartY; y <= heightNumber + this.#camera[1]; y++) {
      for (let x = coorStartX; x <= widthNumber + this.#camera[0]; x++) {
        const npc = this.game.gamecore.getNPC([x, y]);
        if (!npc) {
          continue;
        }
        // this.animateAddNPC(this.#renderData[npc.name][0], (x - coorStartX) * 16 * this.#pixelSize + this.#resizeData.startX, (y - coorStartY) * 16 * this.#pixelSize + this.#resizeData.startY);
        this.renderNPCBlock({
          imgData: this.#renderData[npc.name][0],
          sx: (x - coorStartX) * 16 * num + startX,
          sy:(y - coorStartY) * 16 * num + startY,
        });
      }
    }
    // this.animateNPC();
  }

  renderGame() {
    // console.log(this.#pixelSize)
    if (this.#pixelSize <= 3) {
      this.renderMapByCut();
    } else {
      this.renderMapByWrite();
    }
    this.renderNPC();

    // this.animatePlayer();
  }

  // animatePlayer() {
  //   const frames = npcMap["hmdzl001"].frames;
  //   let nextFrame = 0;
  //   // const coorStartX = this.#camera[0] - this.#resizeData.widthNumber;
  //   // const coorStartY = this.#camera[1] - this.#resizeData.heightNumber;

  //   // requestAnimationFrame(() => {
  //   //   // this.renderMapBlock();
  //   // });
    
  // }

  // animateNPC() {

  // }
  // animateAddNPC(name, sx, sy) {
  //   if (name !== "hmdzl001") {
  //     return;
  //   }
    
  //   // this.#npcAnimation;

  // }

  renderNPCBlock({imgData, sx, sy}) {

    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const index = (y * 16 + x);
        if (imgData.data[index * 4 + 3] === 0) {
          continue;
        }
        this.#ntx.fillStyle = `rgb(${imgData.data[index * 4]}, ${imgData.data[index * 4 + 1]}, ${imgData.data[index * 4 + 2]})`;
        this.#ntx.fillRect(sx + x * this.#pixelSize, sy + y * this.#pixelSize, this.#pixelSize, this.#pixelSize);
      }
    }
  }


  renderMapBlock({imgData, sx, sy}) {
    if (this.#pixelSize === 1) {
      this.#mtx.putImageData(imgData, sx, sy);
      return;
    }

    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const index = (y * 16 + x);
        this.#mtx.fillStyle = `rgb(${imgData.data[index * 4]}, ${imgData.data[index * 4 + 1]}, ${imgData.data[index * 4 + 2]})`;
        this.#mtx.fillRect(sx + x * this.#pixelSize, sy + y * this.#pixelSize, this.#pixelSize, this.#pixelSize);
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

  // getBlockSize() {
  //   return this.#pixelSize * 16;
  // }
  // move(move) {
  //   if (move[0] !== 0) {
  //     const result = this.#player[0] + move[0];
  //     if (result > 1 && result <= 48) {
  //       this.#player[0] = result;
  //       // this.#camera[0] = result;
  //     }
  //   }
  //   if (move[1] !== 0) {
  //     const result = this.#player[1] + move[1];
  //     if (result > 1 && result <= 48) {
  //       this.#player[1] = result;
  //       // this.#camera[1] = result;
  //     }
  //   }
  //   this.game.gamecore.changePlayerCoor();
  //   this.renderGame();
  // }

  move(move) {
    this.game.gamecore.move(move);
    const player = this.game.gamecore.player;
    this.#camera[0] = player[0];
    this.#camera[1] = player[1];
    // this.#camera[0] = this.#player[0];
    // this.#camera[1] = this.#player[1];
    this.renderGame();
  }

  moveView(move) { //[x, y]

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

    // this.#mtx.clearRect(0, 0, this.#mapCanvas.width, this.#mapCanvas.height);

    if (isBigger) {
      if (this.#pixelSize < 4) {
        this.#pixelSize += 1;
      } else if (this.#pixelSize < 8) {
        this.#pixelSize += 2;
      } else {
        return;
      }
    } else {
      if (this.#pixelSize > 4) {
        this.#pixelSize -= 2;
      } else if (this.#pixelSize > 1) {
        this.#pixelSize -= 1;
      } else {
        return;
      }

    }
    // this.updateResizeData();
    this.renderGame();
  }
  // updateResizeData() {
  //   this.#resizeData.startX = ((this.#mapCanvas.width % (this.#pixelSize * 16)) - this.#pixelSize * 16) / 2;
  //   this.#resizeData.startY = ((this.#mapCanvas.height % (this.#pixelSize * 16)) - this.#pixelSize * 16) / 2;

    
  //   this.#resizeData.widthNumber = Math.ceil(((this.#mapCanvas.width - this.#pixelSize * 16) / 2) / (this.#pixelSize * 16));
  //   this.#resizeData.heightNumber = Math.ceil(((this.#mapCanvas.height - this.#pixelSize * 16) / 2) / (this.#pixelSize * 16));
  // }
  // changeBlockSize() {

  // }
  // changeBlockSize(larger) {
  //   if (larger) {
  //     if (this.#blockSize > 16) {
  //       this.#blockSize /= 2;
  //       document.documentElement.style.setProperty("--size", this.#blockSize + "px");
  //     }
  //   } else {
  //     if (this.#blockSize < 128) {
  //       this.#blockSize *= 2;
  //       document.documentElement.style.setProperty("--size", this.#blockSize + "px");
  //     }
  //   }
  // }


  initRenderData() {
    for (const block in blockMap) {
      const textureName = blockMap[block].name;
      this.#tempCtx.drawImage(document.getElementById("water0"), 0, 0);
      const image = document.getElementById(textureName);
      this.#tempCtx.drawImage(image, 0, 0);
      this.#renderData[textureName] = this.#tempCtx.getImageData(0, 0, 16, 16);
    }

    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#mapCanvas.height);

    for (const npc in npcMap) {
      const textureName = npcMap[npc].name;
      this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#mapCanvas.height);
      const image = document.getElementById(textureName);
      this.#tempCtx.drawImage(image, 0, 0);
      // this.#renderData[textureName] = this.#tempCtx.getImageData(0, 0, image.width, image.height).data;
      // for (let i = 0; i < image.width  + image.height / 16)
      const xLength = image.width / 16;
      const yLength = image.height / 16;
      this.#renderData[textureName] = [];
      for (let y = 0; y < yLength; y++) {
        for (let x = 0; x < xLength; x++) {
          this.#renderData[textureName][yLength * y + x] = this.#tempCtx.getImageData(x * 16, y * 16, 16, 16);
        }
      }
    }
  }


  initResize() {
    this.#npcCanvas.addEventListener("wheel", (event) => {
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

  // sadly, no dragging for now
  initDrag() {
    // const body = document.querySelector("body");
    // this.#mapCanvas.addEventListener("mousedown", (event) => {
    //   this.#dragging = true;
    //   this.#mapCanvas.style.cursor = "grab";
    // });
    
    // this.ticking = false;
    // body.addEventListener("mousemove", (event) => {
    //   console.log(event)
      
    //   if (this.#dragging) {
    //     if (!this.ticking) {
    //       requestAnimationFrame(() => {
    //           this.#camera[0] -= event.movementX;
    //           this.#camera[1] -= event.movementY;
    //         this.renderMap();
    //         this.ticking = false;
    //       });
    //     }
    //     this.ticking = true;
    //   }
    // });
    
    // this.#mapCanvas.addEventListener("mouseup", (event) => {
    //   this.#dragging = false;
    //   this.#mapCanvas.style.cursor = "auto";
    // });
  }
}
