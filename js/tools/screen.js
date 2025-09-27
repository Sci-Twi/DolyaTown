

export const screen = {
  width: window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1,
  height: window.innerHeight % 2 === 0 ? window.innerHeight : window.innerHeight + 1,
  isPhone: /Mobi|Android|iPhone/i.test(navigator.userAgent),
  midx: 0,
  midy: 0,

  getScreen() {
    return document.getElementById("block");
  },
};

screen.clickName = screen.isPhone ? "touchstart" : "click";
screen.midx = screen.width / 2;
screen.midy = screen.height / 2;

screen.getScreen().width = screen.width;
screen.getScreen().height = screen.height;
// export default screen;