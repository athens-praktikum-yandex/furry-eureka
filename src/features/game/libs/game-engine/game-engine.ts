import { EventBus } from '@libs/event-bus';
import { Person } from '../person';
import { MapView } from '../map-view/map-view';

export class GameEngine {
  private lastTime: number = 0;

  private startTime: number = 0;

  private eventBus: EventBus;

  constructor(
    private readonly characters: Person[],
    private readonly map: MapView,
  ) {
    this.eventBus = new EventBus();
  }

  startGame() {
    this.startTime = Date.now();
    this.lastTime = Date.now();
    this.eventBus.on('person-death', () => {
      this.eventBus.emit('end-game', Math.floor(10000 / ((this.lastTime - this.startTime) / 1000)));
    });
    this.loop();
  }

  private loop = () => {
    const now = Date.now();
    const dt = (now - this.lastTime) / 1000;
    this.map.render();
    this.characters.forEach((ch) => ch.updateCanvas(dt));
    this.lastTime = now;
    requestAnimationFrame(this.loop);
  };
}
