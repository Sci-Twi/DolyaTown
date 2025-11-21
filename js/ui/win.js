import { canvas } from "../tools/canvas.js";
import { device } from "../tools/device.js";

export const win = {
  renderWindow,
  initWindow,

};

function renderAWindow({name, description}, gameview) {

  // shit codes here
  const windowCanvas = document.getElementById("windowcanvas");
  const wtx = windowCanvas.getContext("2d");

  const num = 6;



  document.getElementById("windowdescription").innerText = description;
  document.getElementById("windowname").innerText = name;

  // silly b, so many hardcoded shit
  if (name === "hmdzl001") {
    if (device.isPhone) {
      document.getElementById("windowdescription").innerText += "\n\n点击交互 右上角缩放";
    } else {
      document.getElementById("windowdescription").innerText += "\n\nwsad移动视角 点击交互 ↑↓←→行走 鼠标滚轮缩放";
    }
    document.getElementById("windowdescription").innerText += "\n项目地址：https://github.com/Sci-Twi/DolyaTown";
  }


  const longSide = windowCanvas.width - num * 5 * 2;
  const shortSide = Math.ceil(document.getElementById("windowdescription").offsetHeight) + num * 18;
  windowCanvas.height = shortSide + num * 5 * 2;
  

  windowCanvas.style.top = Math.floor((device.height - (shortSide + num * 5 * 2)) / 2) + "px";


  const windowContent = document.getElementById("windowcontent");
  windowContent.style.height = shortSide - num * 2 + "px";
  windowContent.style.top = windowCanvas.offsetTop + num * 6 + "px";
  
  // do we really need this?

  const renderMid = (sx, sy) => {
    wtx.fillStyle = "#393B35";
    wtx.fillRect(sx, sy, longSide + num * 2, shortSide + num * 2);
    wtx.fillStyle = "#3B3D37";
    wtx.fillRect(sx + num, sy + num, longSide, shortSide);
    wtx.fillStyle = "#3E4039";
    wtx.fillRect(sx + num * 2, sy + num * 2, longSide - num * 2, shortSide - num * 2);
  };

  const renderAngle = (sx, sy) => {
    wtx.fillStyle = "#63665C";
    wtx.fillRect(sx, sy, 5 * num, 5 * num);
    wtx.fillStyle = "#A0A695";
    wtx.fillRect(sx, sy, 4 * num, 4 * num);
    wtx.fillStyle = "#63665C";
    wtx.fillRect(sx + num, sy + num, 2 * num, 2 * num);
    wtx.fillStyle = "#7B8073";
    wtx.fillRect(sx, sy + 4 * num, num, num);
    wtx.fillRect(sx + num, sy + 3 * num, num, num);
    wtx.fillRect(sx + 2 * num, sy + 2 * num, num, num);
    wtx.fillRect(sx + 3 * num, sy + num, num, num);
    wtx.fillRect(sx + 4 * num, sy, num, num);
  };

  const renderLongSide = (sx, sy) => {
    wtx.fillStyle = "#A0A695";
    wtx.fillRect(sx, sy + num, longSide, num);
    wtx.fillStyle = "#7B8073";
    wtx.fillRect(sx, sy + 2 * num, longSide, num);
    wtx.fillStyle = "#63665C";
    wtx.fillRect(sx, sy + 3 * num, longSide, num);
  };

  const renderShortSide = (sx, sy) => {
    wtx.fillStyle = "#A0A695";
    wtx.fillRect(sx + num, sy, num, shortSide);
    wtx.fillStyle = "#7B8073";
    wtx.fillRect(sx + 2 * num, sy, num, shortSide);
    wtx.fillStyle = "#63665C";
    wtx.fillRect(sx + 3 * num, sy, num, shortSide);
  };

  renderMid(num * 4, num * 4);
  renderAngle(0, 0);
  renderAngle(num * 5 + longSide, 0);
  renderAngle(0, num * 5 + shortSide);
  renderAngle(num * 5 + longSide, num * 5 + shortSide);
  renderLongSide(5 * num, 0);
  renderLongSide(5 * num, 5 * num + shortSide);
  renderShortSide(0, 5 * num);
  renderShortSide(5 * num + longSide, 5 * num);

  // const click = this.game.phone.click;
  const click = device.clickName;
  document.getElementById("canvasback").removeEventListener(click, gameview.mapClickHandler);
  document.getElementById("canvasback").addEventListener(click, gameview.removeWindowHandler);
}

function initWindow() {
  const windowCanvas = document.getElementById("windowcanvas");
  windowCanvas.width = Math.floor(device.width * 0.8);
  windowCanvas.style.left = Math.floor(device.width * 0.1) + "px";

  const num = 6;
  const longSide = windowCanvas.width - num * 5 * 2;

  const windowName = document.getElementById("windowname");
  windowName.style.left = num * 18 + "px";
  windowName.style.fontSize = num * 9 + "px";
  
  const windowContent = document.getElementById("windowcontent");
  windowContent.style.width = longSide - num * 2 + "px";
  windowContent.style.left = Math.floor(device.width * 0.1) + num * 6 + "px";

  
  const windowAnimation = document.getElementById("windowanimation");
  windowAnimation.width = num * 16;
  windowAnimation.height = num * 16;

}

class DescriptionWindow {
  
}

export function renderWindow(textureCanvas, sx, sy, oldTriangleLength, oldRowSideLength, oldColumnSideLength, dx, dy, triangleLength, rowSideLength, columnSideLength) {
  // i dont like these but...
  // triangles
  canvas.draw(textureCanvas, sx, sy, oldTriangleLength, oldTriangleLength, dx, dy, triangleLength, triangleLength);
  canvas.draw(textureCanvas, sx + oldTriangleLength + oldRowSideLength, sy, oldTriangleLength, oldTriangleLength, dx + triangleLength + rowSideLength, dy, triangleLength, triangleLength);
  canvas.draw(textureCanvas, sx, sy + oldTriangleLength + oldColumnSideLength, oldTriangleLength, oldTriangleLength, dx, dy + triangleLength + columnSideLength, triangleLength, triangleLength);
  canvas.draw(textureCanvas, sx + oldTriangleLength + oldRowSideLength, sy + oldTriangleLength + oldColumnSideLength, oldTriangleLength, oldTriangleLength, dx + triangleLength + rowSideLength, dy + triangleLength + columnSideLength, triangleLength, triangleLength);
  // sides
  canvas.draw(textureCanvas, sx + oldTriangleLength, sy, oldRowSideLength, oldTriangleLength, dx + triangleLength, dy, rowSideLength, triangleLength);
  canvas.draw(textureCanvas, sx, sy + oldTriangleLength, oldTriangleLength, oldColumnSideLength, dx, dy + triangleLength, triangleLength, columnSideLength);
  canvas.draw(textureCanvas, sx + oldTriangleLength, sy + oldTriangleLength + oldColumnSideLength, oldRowSideLength, oldTriangleLength, dx + triangleLength, dy + triangleLength + columnSideLength, rowSideLength, triangleLength);
  canvas.draw(textureCanvas, sx + oldTriangleLength + oldRowSideLength, sy + oldTriangleLength, oldTriangleLength, oldColumnSideLength, dx + triangleLength + rowSideLength, dy + triangleLength, triangleLength, columnSideLength);
  // mid
  canvas.draw(textureCanvas, sx + oldTriangleLength, sy + oldTriangleLength, oldRowSideLength, oldColumnSideLength, dx + triangleLength, dy + triangleLength, rowSideLength, columnSideLength);
}