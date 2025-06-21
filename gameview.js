class GameView {
  game;
  #pixelSize;
  #worldSize;
  #player;
  #camera;
  #canvas;
  #ctx;
  #renderData;
  #tempCanvas;
  #tempCtx;
  #dragging;
  #resizeData;
  #npcAnimation;

  constructor(game) {
    this.game = game;
    this.#pixelSize = 1;
    this.#worldSize = this.game.gamecore.worldSize;
    this.#player = this.game.gamecore.player;
    this.#camera = [];
    this.#camera[0] = this.#player[0];
    this.#camera[1] = this.#player[1];
    this.#resizeData = {};
    this.#npcAnimation = [[], []];

    this.#canvas = document.getElementById("game");
    this.#canvas.width = window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1;
    this.#canvas.height = window.innerHeight % 2 === 0 ? window.innerHeight : window.innerHeight + 1;
    this.#ctx = this.#canvas.getContext("2d");
    this.#tempCanvas = document.getElementById("temp");
    // this.#tempCanvas.width = 256;
    // this.#tempCanvas.height = 256;
    this.#tempCtx = this.#tempCanvas.getContext("2d");
    this.#renderData = {};
  }

  // screenToCoor(screen) {
    
  // }

  // coorToScreen(coor) {

  // }

  renderMap() {
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    const coorStartX = this.#camera[0] - this.#resizeData.widthNumber;
    const coorStartY = this.#camera[1] - this.#resizeData.heightNumber;

    for (let y = coorStartY; y <= this.#resizeData.heightNumber + this.#camera[1]; y++) {
      for (let x = coorStartX; x <= this.#resizeData.widthNumber + this.#camera[0]; x++) {
        const block = this.game.gamecore.getBlock([x, y]);
        if (!block) {
          continue;
        }
        this.renderBlock(this.#renderData[block.name], (x - coorStartX) * 16 * this.#pixelSize + this.#resizeData.startX, (y - coorStartY) * 16 * this.#pixelSize + this.#resizeData.startY);
      }
    }
  }

  renderNPC() {
    const coorStartX = this.#camera[0] - this.#resizeData.widthNumber;
    const coorStartY = this.#camera[1] - this.#resizeData.heightNumber;
    for (let y = coorStartY; y <= this.#resizeData.heightNumber + this.#camera[1]; y++) {
      for (let x = coorStartX; x <= this.#resizeData.widthNumber + this.#camera[0]; x++) {
        const npc = this.game.gamecore.getNPC([x, y]);
        // let textureData;
        if (!npc) {
          continue;
        }
        // this.animateAddNPC(this.#renderData[npc.name][0], (x - coorStartX) * 16 * this.#pixelSize + this.#resizeData.startX, (y - coorStartY) * 16 * this.#pixelSize + this.#resizeData.startY);
        this.renderBlock(this.#renderData[npc.name][0], (x - coorStartX) * 16 * this.#pixelSize + this.#resizeData.startX, (y - coorStartY) * 16 * this.#pixelSize + this.#resizeData.startY, true);
      }
    }
    this.animateNPC();
  }

  renderGame() {
    this.renderMap();
    this.renderNPC();

    // this.animatePlayer();
  }

  // animatePlayer() {
  //   const frames = npcMap["hmdzl001"].frames;
  //   let nextFrame = 0;
  //   // const coorStartX = this.#camera[0] - this.#resizeData.widthNumber;
  //   // const coorStartY = this.#camera[1] - this.#resizeData.heightNumber;

  //   // requestAnimationFrame(() => {
  //   //   // this.renderBlock();
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



  renderBlock(imgData, sx, sy, donotRenderTransparent) {


    // if (!imgData) {
    //   // this.#ctx.fillStyle = "rgb(0, 0, 0)";
    //   // this.#ctx.fillRect(sx, sy, this.#pixelSize * 16, this.#pixelSize * 16);
    //   return;
    // }
    if (this.#pixelSize === 1 && !donotRenderTransparent) {
      this.#ctx.putImageData(imgData, sx, sy);
      return;
    }

    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const index = (y * 16 + x);
        if (donotRenderTransparent) {
          if (imgData.data[index * 4 + 3] === 0) {
            continue;
          }
        }
        this.#ctx.fillStyle = `rgb(${imgData.data[index * 4]}, ${imgData.data[index * 4 + 1]}, ${imgData.data[index * 4 + 2]})`;
        this.#ctx.fillRect(sx + x * this.#pixelSize, sy + y * this.#pixelSize, this.#pixelSize, this.#pixelSize);
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
    this.#camera[0] = this.#player[0];
    this.#camera[1] = this.#player[1];
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


    // if (move[0] !== 0) {
    //   const result = this.#camera[0] + move[0];
    //   if (result > 1 && result <= 48) {
    //     this.#camera[0] = result;
    //   }
    // }
    // if (move[1] !== 0) {
    //   const result = this.#camera[1] + move[1];
    //   if (result > 1 && result <= 48) {
    //     this.#camera[1] = result;
    //   }
    // }

    this.renderGame();

  }


  resize(isLarger) {
    // no good solution...for now
    if (isLarger) {
      if (this.#pixelSize === 4) {
        this.#pixelSize = 1;
      } else if (this.#pixelSize > 1) {
        this.#pixelSize -= 1;
      }
    } else {
      if (this.#pixelSize === 1) {
        this.#pixelSize = 4;
      } else if (this.#pixelSize < 8) {
        this.#pixelSize += 1;
      }
    }
    this.updateResizeData();
    this.renderGame();
  }
  updateResizeData() {
    this.#resizeData.startX = ((this.#canvas.width % (this.#pixelSize * 16)) - this.#pixelSize * 16) / 2;
    this.#resizeData.startY = ((this.#canvas.height % (this.#pixelSize * 16)) - this.#pixelSize * 16) / 2;

    
    this.#resizeData.widthNumber = Math.ceil(((this.#canvas.width - this.#pixelSize * 16) / 2) / (this.#pixelSize * 16));
    this.#resizeData.heightNumber = Math.ceil(((this.#canvas.height - this.#pixelSize * 16) / 2) / (this.#pixelSize * 16));
  }
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

    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#canvas.height);

    for (const npc in npcMap) {
      const textureName = npcMap[npc].name;
      this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#canvas.height);
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
    this.updateResizeData();
    this.#canvas.addEventListener("wheel", (event) => {
      this.resize(event.deltaY > 0);
    });
  }
  initAnimate() {
    
  }

  initKeyboard() {
    document.addEventListener("keydown", (event) => {
      // console.log(event)
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
    // this.#canvas.addEventListener("mousedown", (event) => {
    //   this.#dragging = true;
    //   this.#canvas.style.cursor = "grab";
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
    
    // this.#canvas.addEventListener("mouseup", (event) => {
    //   this.#dragging = false;
    //   this.#canvas.style.cursor = "auto";
    // });
  }
}
