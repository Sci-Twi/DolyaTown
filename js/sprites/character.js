export class CharacterSprite {
  idle;
  run;
  die;
  attack;

  current;

  delay = 0;
  index = 0;

  reversed = false;
  constructor() {
    // this.index = 0;
    // this.delay = 0;
    // this.current = this.idle;
  }
}