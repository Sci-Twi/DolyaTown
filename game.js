class Game {
  gameview;
  constructor(map) {
    this.gamecore = new GameCore(this);
    this.gameview = new GameView(this);
    this.gamecore.initMap(map);
    this.gameview.initResize();
    this.gameview.initKeyboard();
    this.gameview.initClick();
    // this.gameview.initDrag();

    this.gameview.renderGame();
    // this.gameview.animatePlayer();
  }
}
