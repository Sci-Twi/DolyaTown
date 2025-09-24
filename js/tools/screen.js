

export const screen = {
  width: window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1,
  height: window.innerHeight % 2 === 0 ? window.innerHeight : window.innerHeight + 1,
  isPhone: /Mobi|Android|iPhone/i.test(navigator.userAgent),
  getScreen() {
    return document.getElementById("block");
  },
};

screen.getScreen().width = screen.width;
screen.getScreen().height = screen.height;
// screen.clickName = screen.phoneClick ? "ontouchstart" : "onclick";
// export default screen;