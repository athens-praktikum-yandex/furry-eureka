import { Person } from './libs/person';
import { PersonActions, PersonType } from './libs/person/types';
import { Resources } from './libs/resources';
import { GameEngine } from './libs/game-engine/game-engine';

export const startGame = (canvas: HTMLCanvasElement) => {
  const resources = new Resources();
  const mainHero = new Person(PersonType.HERO, PersonActions.WALK, resources, canvas);
  const gameEngine = new GameEngine([mainHero]);
  gameEngine.startGame();
};