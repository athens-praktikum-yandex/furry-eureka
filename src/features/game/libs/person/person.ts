import { PersonActions, PersonSprites, PersonType } from './types';
import { Resources } from '../resources';
import { Sprite } from '../sprite';
import HeroIdleImg from './img/hero_idle.png';
import HeroWalkImg from './img/hero_walk.png';
import EnemyArcherIdleImg from './img/enemy_archer_idle.png';
import { Cell } from '../map-generation';
import { HERO, ENEMY_ARCHER } from './constants';

export class Person {
  constructor(
    private readonly personType: PersonType,
    private readonly action: PersonActions,
    private position: Cell,
    private readonly resources: Resources,
    private readonly canvas: HTMLCanvasElement,
  ) {
    this.resources.load([HeroIdleImg, HeroWalkImg, EnemyArcherIdleImg]);
    this.personSprites = this.personFactory(this.personType);
    this.position = position;
  }

  private readonly personSprites: PersonSprites = {
    walk: null,
    idle: null,
  };

  personFactory(personType: PersonType) {
    const mapping = {
      hero: {
        idle: new Sprite(HeroIdleImg, HERO.IDLE.picturePos, HERO.IDLE.frameSize,
          HERO.IDLE.pictureSize, HERO.IDLE.speed, HERO.IDLE.frames),
        walk: new Sprite(HeroWalkImg, HERO.WALK.picturePos, HERO.WALK.frameSize,
          HERO.WALK.pictureSize, HERO.WALK.speed, HERO.WALK.frames),
      },
      enemy_archer: {
        idle: new Sprite(EnemyArcherIdleImg, ENEMY_ARCHER.IDLE.picturePos,
          ENEMY_ARCHER.IDLE.frameSize, ENEMY_ARCHER.IDLE.pictureSize, ENEMY_ARCHER.IDLE.speed,
          ENEMY_ARCHER.IDLE.frames),
        walk: null,
      },
    };

    return mapping[personType];
  }

  setPosition(position: Cell) {
    this.position = position;
  }

  getPosition() {
    return this.position;
  }

  updateCanvas(time: number) {
    if (this.resources.fullyLoaded) {
      const ctx = this.canvas.getContext('2d');
      if (ctx) {
        this.personSprites[this.action]?.update(time);
        this.personSprites[this.action]?.render(ctx, this.resources, this.position);
      }
    }
  }
}
