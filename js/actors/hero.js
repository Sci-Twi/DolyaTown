import { Character } from "./character.js";

export class Hero {
  character;

  lvl = 1;
  exp = 0;


  enemy;
  constructor() {
    this.character = new Character();
    this.character.sight = 6;
  }


}