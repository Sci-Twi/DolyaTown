export class UISprite {
  sx;
  sy;
  sWidth;
  sHeight;
}

export class UI {
  dx;
  dy;
  dWidth;
  dHeight;

  sprite;

  linkSprite(spriteClass) {
    this.sprite = new spriteClass();
  }
}