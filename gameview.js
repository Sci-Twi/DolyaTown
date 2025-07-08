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

  currentShadow;
  mapRenderData;
  npcRenderData;
  #tempCanvas;
  #tempCtx;
  #dragging;
  // #resizeData;
  sight;
  #NPCAnimation;
  currentAnimation;

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

    // this.#resizeData = {};
    this.#NPCAnimation = new NPCAnimationController({
      view: this,
    });

    this.#blockCanvas = [];
    this.#bctx = [];
    // tmep!
    this.oldPlayer = [];
    this.currentAnimation = null;

    

    
    this.#mapCanvas = document.getElementById("block");
    this.#mapCanvas.width = window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1;
    this.#mapCanvas.height = window.innerHeight % 2 === 0 ? window.innerHeight : window.innerHeight + 1;
    
    this.#npcCanvas = document.getElementById("npc");
    this.#npcCanvas.width = this.#mapCanvas.width;
    this.#npcCanvas.height = this.#mapCanvas.height;

    
    this.shadowCanvas = document.getElementById("shadow");
    this.shadowCanvas.width = this.#mapCanvas.width;
    this.shadowCanvas.height = this.#mapCanvas.height;
  
    // const npcWindow = document.getElementById("npcwindow");
    // npcWindow.style.width = this.#mapCanvas.width;
    // npcWindow.style.height = this.#mapCanvas.height;

    // this.windowCanvas = document.getElementById("window");

    this.mtx = this.#mapCanvas.getContext("2d");
    this.ntx = this.#npcCanvas.getContext("2d");
    this.stx = this.shadowCanvas.getContext("2d");
    // this.stx.globalCompositeOperation = "source-over";
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


  renderWindow({name, description}) {

    // shit codes here
    const windowCanvas = document.getElementById("windowcanvas");
    // windowCanvas.width = Math.floor(this.#mapCanvas.width * 0.8);
    // windowCanvas.height = Math.floor(this.#mapCanvas.height * 0.6);
    
    const wtx = windowCanvas.getContext("2d");
    // wtx.fillStyle = "white";
    // wtx.fillRect(0, 0, windowCanvas.width, windowCanvas.height);
  
    const num = 6;
    // const num = this.pixelSize;



    // const nameSize = num * 8 * 0.8;
    // const textSize = num * 8 / 2;
    // const shortSide = windowCanvas.height - num * 5 * 2;
    // const shortSide = Math.ceil(text.length / (longSide / textSize) + text.split("\n").length - 1) * textSize + num * 8;



    document.getElementById("windowdescription").innerText = description;
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




    // document.getElementById("npcwindow").style.display = "block";
    document.getElementById("canvasback").removeEventListener("click", this.mapClickHandler);
    document.getElementById("canvasback").addEventListener("click", this.removeWindowHandler);
  }

  removeWindowHandler = () => {
    const windowCanvas = document.getElementById("windowcanvas");
    windowCanvas.getContext("2d").clearRect(0, 0, windowCanvas.width, windowCanvas.height);
    
    document.getElementById("windowdescription").innerText = "";
    document.getElementById("windowname").innerText = "";
    // console.log(1)
    // document.getElementById("npcwindow").style.display = "none";
    // document.getElementById("canvasback").addEventListener("click", this.mapClickHandler);
    document.getElementById("windowanimation").getContext("2d").clearRect(0, 0, 96, 96);
    this.currentAnimation = null;
    console.log(this)
    this.initClick();
    document.getElementById("canvasback").removeEventListener("click", this.removeWindowHandler);

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
      blockCanvas.style.display = "none";
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
        //   const gradient = this.stx.createLinearGradient(sx, sy, sx, sy + this.pixelSize * 16);
        //   gradient.addColorStop(0, "black");
        //   gradient.addColorStop(1, "#111111cc");
        //   this.stx.fillStyle = gradient;
        //   // this.stx.fillStyle = "black";
        //   // this.stx.fillStyle = "#111111cc";
        //   this.stx.fillRect(sx, sy, this.pixelSize * 16, this.pixelSize * 16);
        // }
        

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

    // this.stx.fillStyle = "#111111cc";
    // this.stx.fillStyle = "#112244cc";
    this.stx.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);
    // this.stx.fillStyle = "rgba(17, 17, 17, 0.8)";
    // this.stx.fillRect(0, 0, shadowCanvas.width, shadowCanvas.height);


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

    // const shadowGradientRender = [[], [], []];
    // shadowGradientRender[2][1] = (sx, sy) => {
    //   // const gradient = this.stx.createLinearGradient(sx + 8 * num, sy + 8 * num, sx + 8 * num, sy + 16 * num);
    //   // gradient.addColorStop(0, "#00000000");
    //   // gradient.addColorStop(1, "#111111cc");
    //   // this.stx.fillStyle = gradient;
    //   // // this.stx.clearRect(sx, sy + num * 8, num * 16, num * 8);
    //   // this.stx.fillRect(sx, sy + num * 8, num * 16, num * 8);
    //   // for (let y = 0; y < 8; y++) {
    //   //   for (let x = 0; x < 16; x++) {
    //   //     this.stx.fillStyle = `rgba(17, 17, 17, ${0.8 * ((y) / 8)})`;
    //   //     this.stx.fillRect(sx + x * num, sy + (y + 8) * num, num, num);
    //   //   }
    //   // }
    // };


    // shadowGradientRender[1][2] = (sx, sy) => {
    //   // const gradient = this.stx.createLinearGradient(sx + 8 * num, sy + 8 * num, sx + 16 * num, sy + 8 * num);
    //   // gradient.addColorStop(0, "#00000000");
    //   // gradient.addColorStop(1, "#111111cc");
    //   // this.stx.fillStyle = gradient;
      
    //   // // this.stx.clearRect(sx + num * 8, sy, num * 8, num * 16);
    //   // this.stx.fillRect(sx + num * 8, sy, num * 8, num * 16);
    //   // const gradient = this.stx.createLinearGradient();
    //   // for (let y = 0; y < 16; y++) {
    //   //   for (let x = 0; x < 8; x++) {
    //   //   }
    //   // }
    // };

    // shadowGradientRender[2][2] = (sx, sy) => {
    //   // const gradient = this.stx.createRadialGradient(sx + 8 * num, sy + 8 * num, num * 4, sx + 8 * num, sy + 8 * num, num * 8);
    //   // const gradient = this.stx.createLinearGradient(sx + 8 * num, sy + 8 * num, sx + 16 * num, sy + 16 * num);
    //   // gradient.addColorStop(0, "#00000000");
    //   // gradient.addColorStop(1, "#111111cc");
    //   // this.stx.fillStyle = gradient;
    //   // this.stx.fillStyle = "red"
      
    //   // this.stx.clearRect(sx + num * 8, sy + num * 8, num * 8, num * 8);
    //   // this.stx.fillRect(sx + num * 8, sy + num * 8, num * 8, num * 8);
    //   // const gradient = this.stx.createLinearGradient();
    //   // for (let y = 0; y < 16; y++) {
    //   //   for (let x = 0; x < 8; x++) {
    //   //   }
    //   // }
    // };
    // console.log(coorStartX, coorStartY)
    // console.log(widthNumber + this.#camera[0] + 2 - coorStartX, heightNumber + this.#camera[1] + 2 - coorStartY)
    
    const invisible = [0, 0, 0, 255];
    const visited = [17, 17, 17, 204];
    const visible = [0, 0, 0, 0];

    const width1 = widthNumber + this.#camera[0] + 2 - coorStartX;
    const height1 = heightNumber + this.#camera[1] + 2 - coorStartY;

    const shadowArray = new ImageData(widthNumber + this.#camera[0] + 2 - coorStartX, heightNumber + this.#camera[1] + 2 - coorStartY);
    // console.log(shadowArray)

    for (let y = coorStartY; y <= heightNumber + this.#camera[1] + 1; y++) {
      for (let x = coorStartX; x <= widthNumber + this.#camera[0] + 1; x++) {
        const b1 = gamecore.getBlock([x, y]);
        const b2 = gamecore.getBlock([x, y - 1]);
        const b3 = gamecore.getBlock([x - 1, y]);
        const b4 = gamecore.getBlock([x - 1, y - 1]);
        // if (!(b1 && b2 && b3 && b4)) {
        //   continue;
        // }
        // const sx = (x - coorStartX) * 16 * num + startX - num * 8;
        // const sy = (y - coorStartY) * 16 * num + startY - num * 8;
        const index = (y - coorStartY) * (widthNumber + this.#camera[0] + 2 - coorStartX) + (x - coorStartX);
        let c = invisible;
        
        let isLit = this.currentShadow.isLit(x, y) && this.currentShadow.isLit(x, y - 1) && this.currentShadow.isLit(x - 1, y) && this.currentShadow.isLit(x - 1, y - 1);
        if (isLit) {
          b1.isVisited = true;
          b2.isVisited = true;
          b3.isVisited = true;
          b4.isVisited = true;
          c = visible;

          // this.renderShadowBlock({
          //   sx,
          //   sy,
          // });
        } else {
          if ((b1 && b2 && b3 && b4)) {
            if (!b1.isVisited || !b2.isVisited || !b3.isVisited || !b4.isVisited) {
              c = invisible;
            } else {
              
              c = visited;
            }
          }
        }
        // const index = (y - (coorStartY - 1)) * (widthNumber + this.#camera[0] + 2 - (coorStartY - 1)) + (x - (coorStartX - 1));
        // console.log((y - coorStartY) * (widthNumber + this.#camera[0] + 1 - coorStartX), (x - coorStartX))
        // console.log(index)
        shadowArray.data[index * 4] = c[0];
        shadowArray.data[index * 4 + 1] = c[1];
        shadowArray.data[index * 4 + 2] = c[2];
        shadowArray.data[index * 4 + 3] = c[3];
        

        // console.log(x, y)
      }
    }
    // this.stx.drawImage(shadowArray, startX, startY);
    this.#tempCtx.putImageData(shadowArray, 0, 0);
    // console.log(this.#tempCanvas.getImageData())
    this.stx.drawImage(this.#tempCanvas, 0, 0, width1, height1, startX - num * 8, startY - num * 8, width1 * this.pixelSize * 16, height1 * this.pixelSize * 16);
    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#tempCanvas.height);
    // for (let y = coorStartY; y <= heightNumber + this.#camera[1]; y++) {
    //   for (let x = coorStartX; x <= widthNumber + this.#camera[0]; x++) {
    //     const block = gamecore.getBlock([x, y]);
    //     if (!block) {
    //       continue;
    //     }
    //     const isLit = this.currentShadow.isLit(x, y);
    //     const sx = (x - coorStartX) * 16 * num + startX;
    //     const sy = (y - coorStartY) * 16 * num + startY;

        
    //     if (isLit) {
    //       if (!block.isVisited) {
    //         block.isVisited = true;
    //       }

    //       this.renderShadowBlock({
    //         sx,
    //         sy,
    //       });

    //     } else {
    //       if (!block.isVisited) {
    //         this.renderBlackBlock({sx, sy});
    //       }
    //     }
    //   }
    // }

  }

  renderShadowBlock({sx, sy}) {
    this.stx.clearRect(sx, sy, this.pixelSize * 16, this.pixelSize * 16);
  }

  renderBlackBlock({sx, sy}) {
    this.stx.fillStyle = "black";
    this.stx.fillRect(sx, sy, this.pixelSize * 16, this.pixelSize * 16);
  }


  // renderGradientShadow({sx, sy, sw, sh, isSide}) {
  //   const num = this.pixelSize;

  //   for (let y = 0; y < sh; y++) {
  //     for (let x = 0; x < sw; x++) {
  //       if (isSide) {
  //         this.stx.fillStyle = `rgba(17, 17, 17, ${0.8 * ((y + 1) / sh)})`;
  //         this.stx.fillRect(sx + x * num, sy + y * num, num, num);
  //       }
        
  //     }
  //   }

  //   // this.stx.
  // }

  


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
        
        if (!this.game.lightMode && !this.currentShadow.isLit(x, y)) {
          continue;
        }

        this.#NPCAnimation.add({
          name: npc.texture,
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
    this.renderShadow();
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
    
    this.#tempCtx.clearRect(0, 0, this.#tempCanvas.width, this.#mapCanvas.height);
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

  // npcClickHandler({coor}) {
  //   const gamecore = this.game.gamecore;
    
  // }

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

    const block = gamecore.getBlock(tobe);

    const isBlockEmpty = block?.type === Block.FLOOR;
    const isNPCEmpty = !gamecore.getNPC(tobe);
  
    if (!isNPCEmpty) {
      gamecore.npcClickHandler({to: [cx + biasX, cy + biasY]});
      return;
    }

    if (isBlockEmpty) {
      if (!block.isVisited && !this.game.lightMode) {
        return;
      }
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

    // if (this.gameview.currentAnimation) {
    //   console.log(1)
    // }
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
    const gameview = this.controller.gameview;
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


      // not good
      if (gameview.currentAnimation === npc) {

        gameview.renderNPCBlock({
          writer: document.getElementById("windowanimation").getContext("2d"),
          imgData: gameview.npcRenderData[npc].data[frames[animate.index]],
          sx: 0,
          sy: 0,
          reverseTexture: gameview.npcRenderData[npc].reverseTexture,
          num: 6,
        });
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
    // const isFloor = this.map[y][x].type === Block.FLOOR;
    // if (!lightPass && isFloor) {
    //   return true;
    // }
    // if (lightPass && !isFloor) {
    //   return false;
    // }
    // if (!lightPass && !isFloor) {
    //   return true;
    // }
    // if (!lightPass && isFloor) {
    //   return true;
    // }
    
    

    // return !lightPass;
    // return this.map[y][x].lightPass;
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
        // const block = this.gameview.game.gamecore.getBlock(x, y);
        // if (!block) {continue};

        
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
  //   // Shadow.calcSectorShadow({sx: 0, sy: 0, radius: 6})
  //   // const map = [];
  //   // for (let i = 0; i < 6; i++) {
  //   //   map[i] = [{type: 0}, {type: 0}, {type: 0}, {type: 0}, {type: 0}, {type: 0}];
  //   // }
  //   // map[3][3].type = 1;
  //   // map[4][0].type = 1;
  //   // map[5][2].type = 1;

  //   // console.log(map)




  //   // const slopeArray = [[1, 0]];
    
  //   // for (let row = 1; row < radius; row++) {
  //   //   for (let col = row - 1; col >= 0; col--) {
  //   //     console.log(map[row][col])

  //   //   }
  //   // }
  // }

  // static isBlocked(block) {
  //   return block.type !== Block.floor;
  // }
}