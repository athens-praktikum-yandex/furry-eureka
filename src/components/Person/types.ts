import { Cell } from '@libs/map-generation';
import { Sprite } from './utils/Sprite';

export enum PersonType {
  HERO = 'hero',
  ENEMY_ARCHER = 'enemy_archer',
}

export enum PersonActions {
  IDLE = 'idle',
  WALK = 'walk',
}

export type ClassProps = {
  ctx: CanvasRenderingContext2D | null,
  prevPosition?: Cell;
  position: Cell;
  time: number;
  action: PersonActions;
};

export type PersonSprites = {
  idle: Sprite | null;
  walk: Sprite | null;
};
