import GameCore from "../temp/gamecore.js";
import GameView from "../temp/gameview.js";
import { device } from "../tools/device.js";
import { keyboard } from "../keyboard.js";
import { map_dolya_block } from "../temp/dolya.js";
import { TilesMap } from "../sprites/tiles.js";

import { win } from "../ui/win.js";

// TODO: export

const cellView = {
  startCoor: [],
  halfLength: [],
};

let pixelSize = 0;
let camera = [];

export const gameScene = {
  // pixel size
  // pixelSize: 0,
  // camera: null,
  

  tiles: null,

  async create() {
    console.log("creating game scene")

    pixelSize = 8;
    camera = [25, 21];

    updateCellView();

    const temp = new GameScene(map_dolya_block);
    this.tilesMap = new TilesMap();
    this.tilesMap.updateTiles();


    keyboard.addListener("gameScene");
    temp.gameview.renderGame();

    
  },

  updateCellView,

  getPixelSize,
  setPixelSize,

  getCamera,
  setCamera,
  
  // calculate dx dy by ps and camera (cellview)
  calcScreenCoor(x, y) {
    if (x < camera[0] - cellView.halfLength[0] || x > camera[0] + cellView.halfLength[0] || y < camera[1] - cellView.halfLength[1] || y > camera + cellView.halfLength[1]) {
      return null;
    }
    return [cellView.startCoor[0] + (x - camera[0] + cellView.halfLength[0]) * pixelSize * 16, cellView.startCoor[1] + (y - camera[1] + cellView.halfLength[1]) * pixelSize * 16];
  },
  getCellView,
};

function getPixelSize() {
  return pixelSize;
}

function setPixelSize(ps) {
  pixelSize = ps;
}

function getCamera() {
  return camera;
}

function setCamera(x, y) {
  camera = [x, y];
}
function getCellView() {
  return cellView;
}

function updateCellView() {
  const ps = pixelSize;
  let startX = ((device.width - ps * 16) / 2) % (ps * 16);
  let startY = ((device.height - ps * 16) / 2) % (ps * 16);
  startX = startX === 0 ? startX : startX - ps * 16;
  startY = startY === 0 ? startY : startY - ps * 16;
  const halfWidth = Math.ceil(((device.width - ps * 16) / 2) / (ps * 16));
  const halfHeight = Math.ceil(((device.height - ps * 16) / 2) / (ps * 16));

  cellView.startCoor[0] = startX;
  cellView.startCoor[1] = startY;
  cellView.halfLength[0] = halfWidth;
  cellView.halfLength[1] = halfHeight;
}

class GameScene {
  gameview;
  gamecore;
  // phone;
  constructor(map) {
    this.gamecore = new GameCore(this);
    this.gameview = new GameView(this);
    
    if (device.isPhone) {
      // this.gameview.initResizeButton();
    } else {
      this.gameview.initResize();
    }
    this.gamecore.initMap(map);
    win.initWindow();
    this.gameview.initClick();
    // this.gameview.renderGame();
  }
}