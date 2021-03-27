import { Person } from './libs/person';
import { PersonActions, PersonType } from './libs/person/types';
import { Resources } from './libs/resources';
import { GameEngine } from './libs/game-engine/game-engine';
import { MapView } from './libs/map-view/map-view';
import { generateMap } from './libs/map-generation';

export const startGame = (canvas: HTMLCanvasElement) => {
  const cellCoordinates = generateMap(8, 14);
  const resources = new Resources();
  const mainHero = new Person(PersonType.HERO, PersonActions.WALK, resources, canvas);
  const map = new MapView(cellCoordinates, canvas);
  const gameEngine = new GameEngine([mainHero], map);
  gameEngine.startGame();
};