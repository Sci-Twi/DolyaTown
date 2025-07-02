class GameView {
  game;
  pixelSize;
  // #worldSize;
  // #player;
  #camera;
  #mapCanvas;
  mtx;

  #npcCanvas;
  ntx;

  // windowCanvas;
  // wtx;

  #blockCanvas;
  #bctx;


  mapRenderData;
  npcRenderData;
  #tempCanvas;
  #tempCtx;
  #dragging;
  #resizeData;
  sight;
  #NPCAnimation;

  constructor(game) {
    this.game = game;
    this.pixelSize = 8;
    this.sight = 6;
    // this.#worldSize = this.game.gamecore.worldSize;
    // this.#player = this.game.gamecore.player;
    const player = this.game.gamecore.player;
    this.#camera = [];
    this.#camera[0] = player[0];
    this.#camera[1] = player[1];

    this.#resizeData = {};
    this.#NPCAnimation = new NPCAnimationController({
      view: this,
    });

    this.#blockCanvas = [];
    this.#bctx = [];

    

    
    this.#mapCanvas = document.getElementById("block");
    this.#mapCanvas.width = window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1;
    this.#mapCanvas.height = window.innerHeight % 2 === 0 ? window.innerHeight : window.innerHeight + 1;
    
    this.#npcCanvas = document.getElementById("npc");
    this.#npcCanvas.width = this.#mapCanvas.width;
    this.#npcCanvas.height = this.#mapCanvas.height;

    
    this.shadowCanvas = document.getElementById("shadow");
    this.shadowCanvas.width = this.#mapCanvas.width;
    this.shadowCanvas.height = this.#mapCanvas.height;

    // this.windowCanvas = document.getElementById("window");

    this.mtx = this.#mapCanvas.getContext("2d");
    this.ntx = this.#npcCanvas.getContext("2d");
    this.stx = this.shadowCanvas.getContext("2d");
    // this.wtx = this.windowCanvas.getContext("2d");
    // this.mtx.clearRect(0, 0, this.#mapCanvas.width, this.#mapCanvas.height);
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
    // windowCanvas.height = Math.floor(this.#mapCanvas.height * 0.6);
    // windowCanvas.height = shortSide - num * 2 + "px";

  }


  renderWindow({name, text}) {

    // shit codes here
    const windowCanvas = document.getElementById("windowcanvas");
    // windowCanvas.width = Math.floor(this.#mapCanvas.width * 0.8);
    // windowCanvas.height = Math.floor(this.#mapCanvas.height * 0.6);
    
    const wtx = windowCanvas.getContext("2d");
    // wtx.fillStyle = "white";
    // wtx.fillRect(0, 0, windowCanvas.width, windowCanvas.height);
  
    const num = 6;
    // const nameSize = num * 8 * 0.8;
    // const textSize = num * 8 / 2;
    // const shortSide = windowCanvas.height - num * 5 * 2;
    // const shortSide = Math.ceil(text.length / (longSide / textSize) + text.split("\n").length - 1) * textSize + num * 8;



    document.getElementById("windowdescription").innerText = text;
    document.getElementById("windowname").innerText = name;


    const longSide = windowCanvas.width - num * 5 * 2;
    const shortSide = Math.ceil(document.getElementById("windowdescription").offsetHeight) + num * 18;
    windowCanvas.height = shortSide + num * 5 * 2;
    

    windowCanvas.style.top = Math.floor((this.#mapCanvas.height - (shortSide + num * 5 * 2)) / 2) + "px";
    // windowCanvas.style.padding = padding + "px";
    // windowCanvas.style.top = Math.floor(this.#mapCanvas.height * 0.25) + "px";


    const windowContent = document.getElementById("windowcontent");
    // windowText.style.width =  longSide - num * 2 + "px";
    windowContent.style.height = shortSide - num * 2 + "px";
    // windowText.style.left = windowCanvas.offsetLeft + num * 6 + "px";
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
  }

  // renderWindowText({name, text}) {
  //   // const windowCanvas = document.getElementById("window");
  //   // const num = 4;
  //   // const longSide = windowCanvas.width - num * 5 * 2 - num * 2;
  //   // const maxText = Math.floor(longSide / 18);


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
        // blockCanvas,
        ctx: bctx,
        pixelSize: num,
      });
      

    });
  }

  preRenderMap({ctx, pixelSize}) {
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
          imgData: this.mapRenderData[block.name],
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

    // this.stx.clearRect(0, 0, this.shadowCanvas.width, this.shadowCanvas.height);

    // this.stx.fillStyle = `#111111cc`;

    

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


        // this.ntx
        // if (y === 14) {
        //   const gradient = this.stx.createLinearGradient(sx, sy, sx, sy + this.pixelSize * 16);
        //   gradient.addColorStop(0, "black");
        //   gradient.addColorStop(1, "#00000000");
        //   this.stx.fillStyle = gradient;
        //   this.stx.fillRect(sx, sy, this.pixelSize * 16, this.pixelSize * 16);
        // }
        // if (y <= 13) {
        //   // const gradient = this.stx.createLinearGradient(sx, sy, sx, sy + this.pixelSize * 16);
        //   // gradient.addColorStop(0, "black");
        //   // gradient.addColorStop(1, "#111111cc");
        //   // this.stx.fillStyle = gradient;
        //   this.stx.fillStyle = "black";
        //   // this.stx.fillStyle = "#111111cc";
        //   this.stx.fillRect(sx, sy, this.pixelSize * 16, this.pixelSize * 16);
        // }
        

      }
    }
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
    this.ntx.clearRect(0, 0, this.#npcCanvas.width, this.#npcCanvas.height);

    // const newAnimation = new NPCAnimation({
    //   view: this,
    //   preAnimation: this.#NPCAnimation,
    // });

    for (let y = coorStartY; y <= heightNumber + this.#camera[1]; y++) {
      for (let x = coorStartX; x <= widthNumber + this.#camera[0]; x++) {
        const npc = this.game.gamecore.getNPC([x, y]);
        if (!npc) {
          continue;
        }

        this.#NPCAnimation.add({
          name: npc.name,
          sx: (x - coorStartX) * 16 * num + startX,
          sy: (y - coorStartY) * 16 * num + startY,
        });
        // if (npc.name === "hmdzl001") {
        //   // continue;
        // }

        // for now
        
      }
    }
    this.#NPCAnimation.stop();
    this.#NPCAnimation.merge();

    // in the future...
    // this.ntx.clearRect(0, 0, this.#npcCanvas.width, );
    this.#NPCAnimation.start();
    // this.#NPCAnimation = newAnimation;
    
    // newAnimation.restart();

    // this.animateNPC();
  }

  renderGame() {
    if (this.pixelSize <= 3) {
      this.renderMapByCut();
    } else {
      this.renderMapByWrite();
    }
    this.renderNPC();


    // this.renderShadow();
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

  // animationListAdd({imgData, sx, sy}) {
  //   this.#npcAnimationList.push({imgData, sx, sy});
  // }
  // getNPCRenderData(name) {
  //   return this.npcRenderData[name];
  // }

  // animateNPC() {

  // }
  // animateAddNPC(name, sx, sy) {
  //   if (name !== "hmdzl001") {
  //     return;
  //   }
    
  //   // this.#npcAnimation;

  // }

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

        // temp
        // this.mtx.fillStyle = `#111111cc`;
        // this.mtx.fillRect(sx + x * this.pixelSize, sy + y * this.pixelSize, this.pixelSize, this.pixelSize);
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
  //   return this.pixelSize * 16;
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

    // this.mtx.clearRect(0, 0, this.#mapCanvas.width, this.#mapCanvas.height);

    if (isBigger) {
      if (this.pixelSize < 4) {
        this.pixelSize += 1;
      } else if (this.pixelSize < 8) {
        this.pixelSize += 2;
      } else {
        return;
      }
    } else {
      if (this.pixelSize > 4) {
        this.pixelSize -= 2;
      } else if (this.pixelSize > 1) {
        this.pixelSize -= 1;
      } else {
        return;
      }

    }
    this.renderGame();
  }
  // updateResizeData() {
  //   this.#resizeData.startX = ((this.#mapCanvas.width % (this.pixelSize * 16)) - this.pixelSize * 16) / 2;
  //   this.#resizeData.startY = ((this.#mapCanvas.height % (this.pixelSize * 16)) - this.pixelSize * 16) / 2;

    
  //   this.#resizeData.widthNumber = Math.ceil(((this.#mapCanvas.width - this.pixelSize * 16) / 2) / (this.pixelSize * 16));
  //   this.#resizeData.heightNumber = Math.ceil(((this.#mapCanvas.height - this.pixelSize * 16) / 2) / (this.pixelSize * 16));
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
      this.mapRenderData[textureName] = this.#tempCtx.getImageData(0, 0, 16, 16);
    }

    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#mapCanvas.height);

    for (const npc in npcMap) {
      const textureName = npcMap[npc].name;
      this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#mapCanvas.height);
      const image = document.getElementById(textureName);
      this.#tempCtx.drawImage(image, 0, 0);
      // this.renderData[textureName] = this.#tempCtx.getImageData(0, 0, image.width, image.height).data;
      // for (let i = 0; i < image.width  + image.height / 16)
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
    document.getElementById("canvasback").addEventListener("click", this.mapClickHandler);

  }

  mapClickHandler = (event) => {
    const gamecore = this.game.gamecore;
    const midX = this.#mapCanvas.width / 2;
    const midY = this.#mapCanvas.height / 2;
    const num = this.pixelSize * 16;

    // bro...
    const biasX = Math.floor((event.clientX - midX - num / 2) / num) + 1;
    const biasY = Math.floor((event.clientY - midY - num / 2) / num) + 1;

    const [cx, cy] = this.#camera;
    const tobe = [cx + biasX, cy + biasY];

    const isBlockEmpty = gamecore.getBlock(tobe)?.type === Block.FLOOR;
    const isNPCEmpty = !gamecore.getNPC(tobe);
  
    if (!isNPCEmpty) {
      gamecore.npcClickHandler({to: [cx + biasX, cy + biasY]});
      return;
    }

    if (isBlockEmpty) {
      gamecore.blockClickHandler({to: [cx + biasX, cy + biasY]});
      return;
    }

    
    

    // const [px, py] = this..player;
    // not good
    

    
  }


  // to be deleted
  // tempStop() {
  //   this.#NPCAnimation.stop();
  // }

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

class NPCAnimationController {
  // #animation;
  // #newAnimationList;
  // #stop;
  // #stoped;
  constructor({view}) {
    this.animationList = {};
    this.animation = new Animation(this);
    
    // this.#newAnimationList = [];
    // this.#animation = null;
    // this.#stop = true;
    this.gameview = view;
  }
  // startAnimate() {


    
  // }
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
    // this.#stop = true;
    // const size = this.gameview.pixelSize * 16;
    // for (const npc of this.animationList) {
    //   this.gameview.ntx.clearRect(npc.sx, npc.sy, size, size);
    // }
    // this.gameview.ntx.clearRect()
  }
  start() {
    this.animation.start();
    for (const npc in this.animationList) {
      this.animationList[npc].dontdelete = false;
    }
  }

  // merge({preAnimation}) {
  //   // const preSet = new Set(preAnimation.keys());
  //   // const nowSet = new Set(this.animationList.keys());
  // }
  add({name, sx, sy}) {
    let animate = this.animationList[name];
    if (!animate) {
      this.animationList[name] = {sx, sy, index: 0, hz: 0, dontdelete: true};
    } else {
      if (tempAnimationDone.includes(name)) {
        animate.sx = sx;
        animate.sy = sy;
        animate.dontdelete = true;
      } else {
        this.animationList[name] = {sx, sy, index: 0, hz: 0, dontdelete: true};
      }
    }

    animate = this.animationList[name];
    let frameIndex = 0;
    
    if (tempAnimationDone.includes(name)) {
      // not good
      const frames = npcMap[name].animation.idle.frames;

      // imgData = this.gameview.renderData[name][frames[animate.index]];
      if (frames.length > animate.index) {
        frameIndex = frames[animate.index];
      }

    }
    this.gameview.renderNPCBlock({
      writer: this.gameview.ntx,
      imgData: this.gameview.npcRenderData[name].data[frameIndex],
      sx,
      sy,
      reverseTexture: this.gameview.npcRenderData[name].reverseTexture,
      num: this.gameview.pixelSize,
    });
    
    
    // this.animationList.push({name, sx, sy, index: 0, hz: 0});

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
    for (const npc in this.controller.animationList) {
      if (!tempAnimationDone.includes(npc)) {
        continue;
      }
      // const npc = this.animationList[animate];
      const animate = this.controller.animationList[npc];
      const hz = npcMap[npc].animation.idle.hz;
      if (animate.hz < hz) {
        animate.hz += 1;
        continue;
      }
      animate.hz = 0;
      const frames = npcMap[npc].animation.idle.frames;
      
      if (frames.length <= animate.index) {
        animate.index = 0;
      }
      
      // const num = this.controller.gameview.pixelSize;
      // this.controller.gameview.ntx.clearRect(animate.sx, animate.sy, num * 16, num * 16);
      // this.gameview.ntx.clearRect(sx, sy, 1)
      this.controller.gameview.renderNPCBlock({
        writer: this.controller.gameview.ntx,
        imgData: this.controller.gameview.npcRenderData[npc].data[frames[animate.index]],
        sx: animate.sx,
        sy: animate.sy,
        reverseTexture: this.controller.gameview.npcRenderData[npc].reverseTexture,
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