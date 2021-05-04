import { EventBus } from '@libs/event-bus';
import { Cell } from '../map-generation';
import { Person } from '../person';
import { PositionOffset } from './types';

export class KeyboardCatcher {
  private eventBus: EventBus;

  constructor(
    private readonly stepSize: number,
    private readonly scaledCells: Cell[],
    private readonly mainHero: Person,
    private readonly enemyArcher: Person,
  ) {
    this.stepSize = stepSize;
    this.scaledCells = scaledCells;
    this.mainHero = mainHero;
    this.enemyArcher = enemyArcher;
    this.eventBus = new EventBus();
  }

  private readonly inputHandler = (e: KeyboardEvent) => {
    this.handleInput(e);
  };

  init() {
    document.addEventListener('keydown', this.inputHandler);
  }

  exit() {
    document.removeEventListener('keydown', this.inputHandler);
  }

  private getPositionOffset = (
    x: number,
    y: number,
    stepSize = this.stepSize,
  ): PositionOffset => ({
    ArrowLeft: { x: x - stepSize, y },
    ArrowRight: { x: x + stepSize, y },
    ArrowUp: { x, y: y - stepSize },
    ArrowDown: { x, y: y + stepSize },
  });

  private makeStep = (
    code: string,
    x: number,
    y: number,
    stepSize = 0,
  ) => {
    stepSize += 10;

    if (stepSize > this.stepSize) {
      stepSize = this.stepSize;
    }

    const positionOffset = this.getPositionOffset(x, y, stepSize);
    const position = positionOffset[code];

    setTimeout(() => {
      this.mainHero.walk();
      this.mainHero.setPosition(position);

      if (stepSize !== this.stepSize) {
        this.makeStep(code, x, y, stepSize);
        return;
      }

      this.mainHero.idle();
    }, 100);
  };

  private handleInput(event: KeyboardEvent) {
    const { code } = event;
    const { x, y } = this.mainHero.getPosition();

    const positionOffset = this.getPositionOffset(x, y);
    const position = positionOffset[code];

    this.makeAttack(code);

    if (this.isStepAvailable(position)) {
      this.makeStep(code, x, y);
    }
  }

  private isHeroNearEnemy() {
    const heroPos = this.mainHero.getPosition();
    const enemyPos = this.enemyArcher.getPosition();

    return (Math.abs(heroPos.x - enemyPos.x) === this.stepSize
      && heroPos.y === enemyPos.y)
      || (Math.abs(heroPos.y - enemyPos.y) === this.stepSize
        && heroPos.x === enemyPos.x);
  }

  private makeAttack = (
    code: string,
  ) => {
    if (code === 'Enter') {
      if (!this.mainHero.personSprites.attack?.inprogress) {
        if (this.isHeroNearEnemy()) {
          this.eventBus.emit('start-fight');
        } else {
          this.mainHero.attack();
        }
      }
    }
  };

  private isStepAvailable(position: Cell) {
    return position
      ? this.scaledCells.some((cell) => cell.x === position.x - this.stepSize / 2
        && cell.y === position.y - this.stepSize / 2)
      : false;
  }
}
