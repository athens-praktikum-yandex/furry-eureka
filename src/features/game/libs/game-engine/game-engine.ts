import { Person } from '../person';
import { MapView } from '../map-view/map-view';

export class GameEngine {
  private lastTime: number = 0;

  constructor(
    private readonly characters: Person[],
    private readonly map: MapView,
  ) {}

  startGame() {
    this.lastTime = Date.now();
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
