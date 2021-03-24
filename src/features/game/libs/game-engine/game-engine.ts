import { Person } from '../person';

export class GameEngine {
  private lastTime: number = 0;

  constructor(
    private readonly characters: Person[],
  ) {}

  startGame() {
    this.lastTime = Date.now();
    this.loop();
  }

  private loop = () => {
    const now = Date.now();
    const dt = (now - this.lastTime) / 1000;
    this.characters[0].updateCanvas(dt);
    this.lastTime = now;
    requestAnimationFrame(this.loop);
  }
}