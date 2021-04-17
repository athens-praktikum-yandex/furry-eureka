import { Cell } from '../map-generation';
import { Person } from '../person';
import { PositionOffset } from './types';

export class KeyboardCatcher {
  constructor(
    private readonly stepSize: number,
    private readonly scaledCells: Cell[],
    private readonly mainHero: Person,
  ) {
    this.stepSize = stepSize;
    this.scaledCells = scaledCells;
    this.mainHero = mainHero;
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

  getPositionOffset = (
    x: number,
    y: number,
    stepSize = this.stepSize,
  ): PositionOffset => ({
    ArrowLeft: { x: x - stepSize, y },
    ArrowRight: { x: x + stepSize, y },
    ArrowUp: { x, y: y - stepSize },
    ArrowDown: { x, y: y + stepSize },
  });

  makeStep = (
    code: string,
    x: number,
    y: number,
    stepSize = 0,
  ) => {
    stepSize += 20;

    if (stepSize > this.stepSize) {
      stepSize = this.stepSize;
    }

    const positionOffset = this.getPositionOffset(x, y, stepSize);
    const position = positionOffset[code];

    setTimeout(() => {
      this.mainHero.setPosition(position);

      if (stepSize !== this.stepSize) {
        this.makeStep(code, x, y, stepSize);
      }
    }, 100);
  };

  handleInput(event: KeyboardEvent) {
    const { code } = event;
    const { x, y } = this.mainHero.getPosition();

    const positionOffset = this.getPositionOffset(x, y);
    const position = positionOffset[code];

    if (this.isStepAvailable(position)) {
      this.makeStep(code, x, y);
    }
  }

  isStepAvailable(position: Cell) {
    return position
      ? this.scaledCells.some((cell) => cell.x === position.x - this.stepSize / 2
        && cell.y === position.y - this.stepSize / 2)
      : false;
  }
}
