export class CharacterSprite {
  idle;
  run;
  die;
  attack;

  current;

  delay;
  index;
  constructor() {
    this.index = 0;
    this.delay = 0;

    // this.current = this.idle;
  }
}