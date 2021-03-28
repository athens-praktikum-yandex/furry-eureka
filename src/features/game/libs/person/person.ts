import { PersonActions, PersonSprites, PersonType } from './types';
import { Resources } from '../resources';
import { Sprite } from '../sprite';
import HeroIdleImg from './img/hero_idle.png';
import HeroWalkImg from './img/hero_walk.png';
import EnemyArcherIdleImg from './img/enemy_archer_idle.png';
import { Cell } from '../map-generation';

export class Person {
  constructor(
    private readonly personType: PersonType,
    private readonly action: PersonActions,
    private readonly position: Cell,
    private readonly resources: Resources,
    private readonly canvas: HTMLCanvasElement,
  ) {
    this.resources.load([HeroIdleImg, HeroWalkImg, EnemyArcherIdleImg]);
    switch (this.personType) {
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
      default:
        this.personSprites = {
          idle: null,
          walk: null,
        };
    }
  }

  private readonly personSprites: PersonSprites = {
    walk: null,
    idle: null,
  };

  static randomPosition(map: Cell[], cellSideSize: number) {
    const position = map[Math.floor(Math.random() * map.length)];
    return {
      x: position.x * cellSideSize + cellSideSize / 2,
      y: position.y * cellSideSize + cellSideSize / 2,
    };
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
