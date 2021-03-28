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

  init() {
    document.addEventListener('keydown', (e) => {
      this.handleInput(e);
    });
  }

  handleInput(event: KeyboardEvent) {
    const { code } = event;
    const { x, y } = this.mainHero.getPosition();
    const positionOffset: PositionOffset = {
      ArrowLeft: { x: x - this.stepSize, y },
      ArrowRight: { x: x + this.stepSize, y },
      ArrowUp: { x, y: y - this.stepSize },
      ArrowDown: { x, y: y + this.stepSize },
    };
    const position = positionOffset[code];
    if (this.isStepAvailable(position)) {
      this.mainHero.setPosition(position);
      // this.setPersonAction(PersonActions.WALK);
    }
  }

  isStepAvailable(position: Cell) {
    return (position)
      ? this.scaledCells.some((cell) => cell.x === position.x && cell.y === position.y)
      : false;
  }
}
