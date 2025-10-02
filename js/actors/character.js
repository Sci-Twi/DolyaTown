import { Actor } from "./actor.js";
export class Character {
  actor;
  sprite;

  pos;

  constructor() {
    this.actor = new Actor();
  }

  linkSprite(spriteClass) {
    this.sprite = new spriteClass();
  }
  
}