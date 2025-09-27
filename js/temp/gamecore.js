import { pathFinder } from "../mechanics/pathFinder.js";
import {Block, blockMap, npcMap} from "./dolya.js";
import { win } from "../ui/window.js";
import { screen } from "../tools/screen.js";

export default class GameCore {
  game;
  worldSize;
  blockmap;
  npcmap;
  player;
  sight;
  constructor(game) {
    this.game = game;
    this.worldSize = [48, 48];
    this.player = [25, 21];
    this.sight = 7;
  }

  npcClickHandler({to}) {
    const name = this.getNPC(to).name;
    const text = npcMap[name].text;
    this.game.gameview.currentAnimation = name;
    win.renderWindow(text, this.game.gameview);
    this.game.gameview.yell(text);
  }

  blockClickHandler({to}) {
    this.multiMove(pathFinder.findPath(this.player, to, this));
  }

  

  async multiMove(move) {
    const click = screen.clickName;

    if (move.length === 1) {
      this.game.gameview.move(move[0]);
      return;
    }

    let stop = false;
    const stopCallback = (event) => {
      stop = true;
      document.getElementById("canvasback").removeEventListener(click, stopCallback);
      document.getElementById("canvasback").addEventListener(click, this.game.gameview.mapClickHandler);
    };
    document.getElementById("canvasback").addEventListener(click, stopCallback);
    document.getElementById("canvasback").removeEventListener(click, this.game.gameview.mapClickHandler);
    const next = (m) => {
      return new Promise((resolve, reject) => {

        // wtf
        setTimeout(() => {
          this.game.gameview.move(m);
          resolve();
        }, 100);
      });
    }


    let firstTime = true;

    for (const m of move) {
      // ugly
      if (firstTime) {
        this.game.gameview.move(m);
        firstTime = false;
        continue;
      }



      if (stop) {
        break;
      }
      await next(m);
    }
    
    document.getElementById("canvasback").removeEventListener(click, stopCallback);
    document.getElementById("canvasback").addEventListener(click, this.game.gameview.mapClickHandler);
  }

  move(move) {
    const [originX, originY] = this.player;

    const toX = move[0] + originX;
    const toY = move[1] + originY;

    if (toX <= 0 || toX > 48 || toY <= 0 || toY > 48) {
      return;
    }
    if (this.getBlock([toX, toY]).type !== Block.FLOOR) {
      return;
    }
    if (this.getNPC([toX, toY])) {
      return;
    }


    const t = this.getNPC(this.player);
    this.npcmap[toY][toX] = t;
    this.npcmap[originY][originX] = null;
    this.player[0] = toX;
    this.player[1] = toY;
    
  }

  getBlock([x, y]) {
    if (x < 1 || y < 1 || x >= this.worldSize[0] || y >= this.worldSize[1]) {
      return null;
    }
    return this.blockmap[y][x];
  }
  getNPC([x, y]) {
    if (x < 1 || y < 1 || x >= this.worldSize[0] || y >= this.worldSize[1]) {
      return null;
    }
    return this.npcmap[y][x];
  }
  
  initMap(map) {
    this.game.gameview.initRenderData();
    // customize

    this.blockmap = [];
    for (let y = 0; y < this.worldSize[1]; y++) {
      this.blockmap[y] = [];
      for (let x = 0; x < this.worldSize[0]; x++) {
        this.blockmap[y][x] = new Block(blockMap[map[y][x]]);
      }
    }

    this.npcmap = [];
    for (let y = 0; y < this.worldSize[1]; y++) {
      this.npcmap[y] = [];
    }
    for (const npc in npcMap) {
      const [x, y] = npcMap[npc].coor;
      this.npcmap[y][x] = new NPC(npc, npcMap[npc]);
    }
    this.game.gameview.initMap();

  }
}



class NPC {
  name;
  texture;

  // dont code like that
  constructor(realName, {name}) {
    this.name = realName;
    this.texture = name;
  }
}
