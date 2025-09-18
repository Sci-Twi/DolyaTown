export {
  screen,
};

const screen = {
  width: window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1,
  height: window.innerHeight % 2 === 0 ? window.innerHeight : window.innerHeight + 1,
  getScreen() {
    return document.getElementById("block");
  },
};

screen.getScreen().width = screen.width;
screen.getScreen().height = screen.height;
