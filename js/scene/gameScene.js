import GameCore from "../temp/gamecore.js";
import GameView from "../temp/gameview.js";
import { screen } from "../tools/screen.js";
import { keyboard } from "../keyboard.js";
import { map_dolya_block } from "../temp/dolya.js";
import { tiles } from "../actor/tiles.js";
import { textureCache } from "../tools/textureCache.js";
import { assets } from "../assets.js";
import { win } from "../ui/window.js";

export const gameScene = {
  // pixel size
  pixelSize: 8,
  camera: [24, 24],

  tiles: null,

  async create() {
    console.log("creating game scene")
    await textureCache.loadTextures(Object.keys(assets));
    new GameScene(map_dolya_block);
    keyboard.addListener("gameScene");
    this.tilesMap = tiles.create();
    // this.tiles = tiles.create(48, 48);
    

  },

};

class GameScene {
  gameview;
  gamecore;
  phone;
  constructor(map) {
    this.gamecore = new GameCore(this);
    this.gameview = new GameView(this);
    
    if (screen.isPhone) {
      this.gameview.initResizeButton();
    } else {
      this.gameview.initResize();
    }
    this.gamecore.initMap(map);
    win.initWindow(this.gameview);
    this.gameview.initClick();
    this.gameview.renderGame();
    this.gameview.initHz();
  }
}