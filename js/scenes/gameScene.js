import GameCore from "../temp/gamecore.js";
import GameView from "../temp/gameview.js";
import { device } from "../tools/device.js";
import { keyboard } from "../keyboard.js";
import { map_dolya_block } from "../temp/dolya.js";
import { TilesMap } from "../sprites/tiles.js";

import { win } from "../ui/win.js";

export const gameScene = {
  // pixel size
  pixelSize: 8,
  camera: [24, 24],

  tiles: null,

  async create() {
    console.log("creating game scene")
    new GameScene(map_dolya_block);
    this.tilesMap = new TilesMap();
    this.tilesMap.updateTiles();

    keyboard.addListener("gameScene");

    
  },

};

class GameScene {
  gameview;
  gamecore;
  // phone;
  constructor(map) {
    this.gamecore = new GameCore(this);
    this.gameview = new GameView(this);
    
    if (device.isPhone) {
      this.gameview.initResizeButton();
    } else {
      this.gameview.initResize();
    }
    this.gamecore.initMap(map);
    win.initWindow();
    this.gameview.initClick();
    this.gameview.renderGame();
  }
}