import { Cell } from '../map-generation';
import { PersonActions } from '../person';
import { PositionSetter, ActionSetter, PositionOffset } from './types';

export class KeyboardCatcher {
  private readonly stepSize: number = 0;

  private readonly cellCoordinates: Cell[] = [];

  private position: Cell = { x: 0, y: 0 };

  private setPosition: PositionSetter | undefined;

  private setPersonAction: ActionSetter | undefined;

  constructor(stepSize: number, cellCoordinates: Cell[]) {
    this.stepSize = stepSize;
    this.cellCoordinates = cellCoordinates;
  }

  init() {
    document.addEventListener('keydown', (e) => {
      this.handleInput(e);
    });
  }

  setData(position: Cell, setPosition: PositionSetter, setPersonAction: ActionSetter) {
    this.position = position;
    this.setPosition = setPosition;
    this.setPersonAction = setPersonAction;
  }

  handleInput(event: KeyboardEvent) {
    const { code } = event;
    const { x, y } = this.position;
    const positionOffset: PositionOffset = {
      ArrowLeft: { x: x - this.stepSize, y },
      ArrowRight: { x: x + this.stepSize, y },
      ArrowUp: { x, y: y - this.stepSize },
      ArrowDown: { x, y: y + this.stepSize },
    };

    if (this.setPosition && this.setPersonAction) {
      const position = positionOffset[code];
      if (this.isStepAvailable(position)) {
        this.setPosition(position);
        this.setPersonAction(PersonActions.WALK);
      }
    }
  }

  isStepAvailable(position: Cell) {
    return this.cellCoordinates.some((cell) => cell.x === position.x && cell.y === position.y);
  }
}
