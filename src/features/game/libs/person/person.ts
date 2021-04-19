import { PersonActions, PersonSprites, PersonType } from './types';
import { Resources } from '../resources';
import { Sprite } from '../sprite';
import HeroIdleImg from './img/hero_idle.png';
import HeroWalkImg from './img/hero_walk.png';
import HeroAttackImg from './img/hero_attack.png';
import EnemyArcherIdleImg from './img/enemy_archer_idle.png';
import EnemyArcherDeathImg from './img/enemy_archer_death.png';
import { Cell } from '../map-generation';
import { HERO, ENEMY_ARCHER } from './constants';

export class Person {
  constructor(
    private readonly personType: PersonType,
    private action: PersonActions,
    private position: Cell,
    private readonly resources: Resources,
    private readonly canvas: HTMLCanvasElement,
  ) {
    this.resources.load([
      HeroIdleImg,
      HeroWalkImg,
      HeroAttackImg,
      EnemyArcherIdleImg,
      EnemyArcherDeathImg,
    ]);
    this.personSprites = this.personFactory(this.personType);
    this.position = position;
  }

  public readonly personSprites: PersonSprites = {
    walk: null,
    idle: null,
    attack: null,
    death: null,
  };

  personFactory(personType: PersonType) {
    const mapping = {
      hero: {
        idle: new Sprite(HeroIdleImg, HERO.IDLE.picturePos, HERO.IDLE.frameSize,
          HERO.IDLE.pictureSize, HERO.IDLE.speed, HERO.IDLE.frames),
        walk: new Sprite(HeroWalkImg, HERO.WALK.picturePos, HERO.WALK.frameSize,
          HERO.WALK.pictureSize, HERO.WALK.speed, HERO.WALK.frames),
        attack: new Sprite(HeroAttackImg, HERO.ATTACK_CLOSE.picturePos,
          HERO.ATTACK_CLOSE.frameSize, HERO.ATTACK_CLOSE.pictureSize,
          HERO.ATTACK_CLOSE.speed, HERO.ATTACK_CLOSE.frames, 'horizontal', true),
        death: null,
      },
      enemy_archer: {
        idle: new Sprite(EnemyArcherIdleImg, ENEMY_ARCHER.IDLE.picturePos,
          ENEMY_ARCHER.IDLE.frameSize, ENEMY_ARCHER.IDLE.pictureSize, ENEMY_ARCHER.IDLE.speed,
          ENEMY_ARCHER.IDLE.frames),
        walk: null,
        attack: null,
        death: new Sprite(EnemyArcherDeathImg, ENEMY_ARCHER.DEATH.picturePos,
          ENEMY_ARCHER.DEATH.frameSize, ENEMY_ARCHER.DEATH.pictureSize, ENEMY_ARCHER.DEATH.speed,
          ENEMY_ARCHER.DEATH.frames, 'horizontal', true),
      },
    };

    return mapping[personType];
  }

  walk() {
    this.action = PersonActions.WALK;
  }

  idle() {
    this.action = PersonActions.IDLE;
  }

  attack() {
    if (this.personSprites.attack) {
      this.personSprites.attack.reset();
    }
    this.action = PersonActions.ATTACK;
  }

  death() {
    this.action = PersonActions.DEATH;
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
