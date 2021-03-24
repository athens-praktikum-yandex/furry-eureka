import {Cell} from '@libs/map-generation';
import {PersonActions} from '@components/Person';
import {PositionSetter, ActionSetter, InputParameters} from './types';

export class KeyboardCatcher {
  private readonly dx: number = 0;

  private readonly dy: number = 0;

  private readonly map: Cell[] = [];

  private position: Cell = {x: 0, y: 0};

  private setPosition: PositionSetter | undefined;

  private setPersonAction: ActionSetter | undefined;

  constructor(inputParameters: InputParameters) {
    this.dx = inputParameters.dx;
    this.dy = inputParameters.dy;
    this.map = inputParameters.map;
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
    const {code} = event;
    const {x, y} = this.position;

    if (this.setPosition && this.setPersonAction) {
      let position = null;
      switch (code) {
        case 'ArrowLeft':
          position = {x: x - this.dx, y};
          break;
        case 'ArrowRight':
          position = {x: x + this.dx, y};
          break;
        case 'ArrowUp':
          position = {x, y: y - this.dy};
          break;
        case 'ArrowDown':
          position = {x, y: y + this.dy};
          break;
        default: {
          position = {x, y};
        }
      }
      if (this.isStepAvailable(position)) {
        this.setPosition(position);
        this.setPersonAction(PersonActions.WALK);
      }
    }
  }

  isStepAvailable(position: Cell) {
    return this.map.some((cell) => cell.x === position.x && cell.y === position.y);
  }
}
