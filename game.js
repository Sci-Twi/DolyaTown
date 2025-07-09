class Game {
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
      // this.gameview.initTouch();
      this.gameview.initResizeButton();
      
      // this.gameview.initResize();

    } else {
      this.gameview.initResize();

      // this.gameview.initResizeButton();
    }

    
    // this.gameview.initResize();


    // this.gameview.initPhone();
    this.gamecore.initMap(map);
    this.gameview.initKeyboard();
    this.gameview.initClick();
    this.gameview.initWindow();
    // this.gameview.renderWindow({name: "html001", text: `啊，在这种地方遇到\n\n\n蓝狐之年\n\n红尘\n似水一个体面的人是多么惊喜！我来这里是为了寻找一样稀有的材料——尸骨灰烬。它可以在遗骸中被收集，其中有很强的诅咒。作为一个施法者，我可以轻易地对付这里的怪物，但我迷路了，而且魔法盾也在逐渐减弱，好尴尬！也许你能够帮助我?为了报答你的工作，我很愿意给你一把我制作的高质量法杖。`});
    // this.gameview.initDrag();

    this.gameview.renderGame();
    this.gameview.initHz();

    // this.gameview.animatePlayer();
  }

  // initPhone() {
  // }
}
