

export const device = {
  width: window.innerWidth % 2 === 0 ? window.innerWidth : window.innerWidth + 1,
  height: window.innerHeight % 2 === 0 ? window.innerHeight : window.innerHeight + 1,
  isPhone: /Mobi|Android|iPhone/i.test(navigator.userAgent),
  midx: 0,
  midy: 0,

  getDevice() {
    return document.getElementById("block");
  },
};

device.clickName = device.isPhone ? "touchstart" : "click";
device.midx = device.width / 2;
device.midy = device.height / 2;

device.getDevice().width = device.width;
device.getDevice().height = device.height;
