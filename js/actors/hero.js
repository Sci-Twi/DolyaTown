import { Character } from "./character";

export class Hero {
  character;

  lvl = 1;
  exp = 0;

  enemy;
  constructor() {
    this.character = new Character();
  }


}