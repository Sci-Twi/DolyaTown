export const inputProcessor = {
  stoped: false,
  layers: [],
  register,
  stop() {
    this.stoped = true;
  },
  start() {
    this.stoped = false;
  },
  clear() {
    this.layers = [];
  },
};


// const layers = [];

function start() {
  
}

function register() {
  // this.layers.push();

}