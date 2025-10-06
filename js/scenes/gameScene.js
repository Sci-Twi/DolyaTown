import GameCore from "../temp/gamecore.js";
import GameView from "../temp/gameview.js";
import { device } from "../tools/device.js";
import { keyboard } from "../keyboard.js";
import { TilesMap } from "../sprites/tiles.js";

import { win } from "../ui/win.js";
import { game } from "../game.js";
import { MobsMap } from "../sprites/mobs.js";
import { ShadowMap } from "../sprites/shadow.js";


export let cellView = {
  startCoor: [],
  halfLength: [],
};

export let pixelSize = 0;
export let camera = [];

export const gameScene = {

  tilesMap: null,
  mobsMap: null,
  shadowMap: null,

  async create() {
    console.log("creating game scene")

    pixelSize = 8;
    camera = [25, 21];

    updateCellView();

    // should i inject dungeon.level.levelAttr...?
    const temp = new GameScene();
    this.tilesMap = new TilesMap();
    
    this.mobsMap = new MobsMap();

    this.shadowMap = new ShadowMap();
    // this.tilesMap.updateTiles();


    keyboard.addListener("gameScene");
    temp.gameview.renderGame();

    game.render();
    
    
  },

  updateCellView,
  setPixelSize,
  render,

  setCamera,
  
  // calculate dx dy by ps and camera (cellview)
  calcScreenCoor(x, y) {
    if (x < camera[0] - cellView.halfLength[0] || x > camera[0] + cellView.halfLength[0] || y < camera[1] - cellView.halfLength[1] || y > camera + cellView.halfLength[1]) {
      return null;
    }
    return [cellView.startCoor[0] + (x - camera[0] + cellView.halfLength[0]) * pixelSize * 16, cellView.startCoor[1] + (y - camera[1] + cellView.halfLength[1]) * pixelSize * 16];
  },
};

function setPixelSize(ps) {
  pixelSize = ps;
}

function setCamera(x, y) {
  camera = [x, y];
}

function updateCellView() {
  const ps = pixelSize;
  let startX = ((device.width - ps * 16) / 2) % (ps * 16);
  let startY = ((device.height - ps * 16) / 2) % (ps * 16);
  startX = startX === 0 ? startX : startX - ps * 16;
  startY = startY === 0 ? startY : startY - ps * 16;
  const halfWidth = Math.ceil(((device.width - ps * 16) / 2) / (ps * 16));
  const halfHeight = Math.ceil(((device.height - ps * 16) / 2) / (ps * 16));

  cellView = {
    startCoor: [startX, startY],
    halfLength: [halfWidth, halfHeight],
  };

}

function render() {
  this.tilesMap.render();
  this.mobsMap.render();
  this.shadowMap.render();
}

class GameScene {
  gameview;
  gamecore;
  constructor() {
    this.gamecore = new GameCore(this);
    this.gameview = new GameView(this);
    
    if (device.isPhone) {
      // this.gameview.initResizeButton();
    } else {
      this.gameview.initResize();
    }
    this.gamecore.initMap();
    win.initWindow();
    this.gameview.initClick();
  }
}