import { Sprite } from '../sprite';

export enum PersonType {
  HERO = 'hero',
  ENEMY_ARCHER = 'enemy_archer',
}

export enum PersonActions {
  IDLE = 'idle',
  WALK = 'walk',
  ATTACK = 'attack',
}

export type PersonSprites = {
  idle: Sprite | null;
  walk: Sprite | null;
  attack: Sprite | null;
};
