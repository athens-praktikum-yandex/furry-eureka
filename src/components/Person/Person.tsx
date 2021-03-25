import { Resources } from '@libs/resources/Resources';
import { PersonSprites, PersonType, ClassProps } from './types';
import { Sprite } from './utils/Sprite';
import HeroIdleImg from './img/hero_idle.png';
import HeroWalkImg from './img/hero_walk.png';
import EnemyArcherIdleImg from './img/enemy_archer_idle.png';
import './Person.css';

const resources = new Resources();
resources.load([HeroIdleImg, HeroWalkImg, EnemyArcherIdleImg]);

export class Person {
  private personSprites: PersonSprites = {
    walk: null,
    idle: null,
  };

  constructor(personType: PersonType) {
    switch (personType) {
      case 'hero':
        this.personSprites.idle = new Sprite(HeroIdleImg, [63, 41], [170, 96], [35, 35], 16,
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        this.personSprites.walk = new Sprite(HeroWalkImg, [66, 41], [170, 96], [35, 35], 8,
          [0, 1, 2, 3, 4, 5, 6, 7]);
        break;
      case 'enemy_archer':
        this.personSprites.idle = new Sprite(EnemyArcherIdleImg, [53, 36], [128, 128], [25, 40], 8,
          [0, 1, 2, 3, 4, 5, 6, 7]);
        break;
      default: {
        this.personSprites.idle = null;
        this.personSprites.walk = null;
      }
    }
  }

  updateCanvas({
    ctx, action, time, position, prevPosition,
  }: ClassProps) {
    if (ctx && resources.fullyLoaded) {
      if (this.personSprites[action] as Sprite !== null) {
        (this.personSprites[action] as Sprite).update(time);
        (this.personSprites[action] as Sprite).render(ctx,
          resources, position, prevPosition);
      }
    }
  }
}
