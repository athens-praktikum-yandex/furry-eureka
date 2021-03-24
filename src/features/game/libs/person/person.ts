import { PersonActions, PersonSprites, PersonType } from './types';
import { Resources } from '../resources';
import { Sprite } from '../sprite';
import HeroIdleImg from './img/hero_idle.png';
import HeroWalkImg from './img/hero_walk.png';

export class Person {
  private readonly personSprites: PersonSprites;

  constructor(
    private readonly personType: PersonType,
    private readonly action: PersonActions,
    private readonly resources: Resources,
    private readonly canvas: HTMLCanvasElement,
  ) {
    this.resources.load([HeroIdleImg, HeroWalkImg]);
    switch (this.personType) {
      case 0:
        this.personSprites = {
          idle: new Sprite(
            HeroIdleImg,
            [63, 41],
            [170, 96],
            16,
            [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
            ]),
          walk: new Sprite(
            HeroWalkImg,
            [66, 41],
            [170, 96],
            16,
            [0, 1, 2, 3, 4, 5, 6, 7],
          ),
        };
        break;
      default:
        this.personSprites = {
          idle: null,
          walk: null,
        }
    }
  }

  updateCanvas(time) {
    if (this.canvas && this.resources.fullyLoaded) {
      const ctx = this.canvas.getContext('2d');
      this.personSprites[this.action]?.update(time);
      this.personSprites[this.action]?.render(ctx, this.resources);
    }
  }
}