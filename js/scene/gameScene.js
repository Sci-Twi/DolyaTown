import GameCore from "../temp/gamecore.js";
import GameView from "../temp/gameview.js";

export default class Game {
  gameview;
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
    
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      this.phone.isPhone = true;
      this.phone.click = "touchstart";
      this.gameview.initResizeButton();
    } else {
      this.gameview.initResize();
    }
    this.gamecore.initMap(map);
    this.gameview.initKeyboard();
    this.gameview.initClick();
    this.gameview.initWindow();
    this.gameview.renderGame();
    this.gameview.initHz();
  }
}

