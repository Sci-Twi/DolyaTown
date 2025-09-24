
const keyboard = {
  addListener(listener) {
    document.addEventListener("keydown", listeners[listener]);
  },
  
  removeListener(listener) {
    document.removeEventListener("keydown", listeners[listener]);
  },
};


const listeners = {
  gameScene: (keyEvent) => {
    if (keyEvent.repeat) {
      return;
    }
    // not working
    switch (keyEvent.key.toLowerCase()) {
      case "arrowup":
        this.move([0, -1]);
        break;
      case "arrowdown":
        this.move([0, 1]);
        break;
      case "arrowleft":
        this.move([-1, 0]);
        break;
      case "arrowright":
        this.move([1, 0]);
        break;
      default:
        return;
    }
  },
};

export default keyboard;