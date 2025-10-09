import { device } from "../tools/device.js";
import { debug } from "../tools/debug.js";
import { camera, gameScene, pixelSize } from "../scenes/gameScene.js";
import { textureCache } from "../tools/textureCache.js";
import { checkFlag, flags } from "../levels/terrain.js";
import { dungeon } from "../dungeon.js";



export default class GameView {
  game;


  constructor(game) {
    this.game = game;

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
    this.initClick();
    document.getElementById("canvasback").removeEventListener(device.clickName, this.removeWindowHandler);

  }


  move(move) {
    this.game.gamecore.move(move);
    const player = dungeon.hero.heroAttr.character.pos;


    gameScene.setCamera(...player);
    gameScene.updateCellView();
    
    // too specific
    if (move[0] > 0) {
      textureCache.getTexture("hmdzl001").reversed = false;
    } else if (move[0] < 0) {
      textureCache.getTexture("hmdzl001").reversed = true;
    }
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
      const isNPCEmpty = !dungeon.level.levelAttr.mobs2D.get(...tobe);
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
