import GameCore from "../temp/gamecore.js";
import GameView from "../temp/gameview.js";
import {screen} from "../tools/screen.js";
import keyboard from "../keyboard.js";
import { map_dolya_block } from "../temp/dolya.js";

export const gameScene = {
  tiles: null,

  create,

};

class GameScene {
  gameview;
  // dungeon.java
  gamecore;
  lightMode;
  phone;
  constructor(map) {
    this.gamecore = new GameCore(this);
    this.gameview = new GameView(this);
    this.lightMode = false;
    this.phone = {
      isPhone: false,
      click: "click",
    }
    
    if (screen.isPhone) {
      this.phone.isPhone = true;
      this.phone.click = "touchstart";
      this.gameview.initResizeButton();
    } else {
      this.gameview.initResize();
    }
    this.gamecore.initMap(map);
    keyboard.addListener("gameScene");
    this.gameview.initClick();
    this.gameview.initWindow();
    this.gameview.renderGame();
    this.gameview.initHz();
  }
}

function create() {

  new GameScene(map_dolya_block);
  // console.log(1)
  // this
  // this.tiles = new TilesMap();
}

