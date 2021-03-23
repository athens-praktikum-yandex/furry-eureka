import {Cell} from '@libs/map-generation';

type InputParameters = {
  dx: number,
  dy: number,
  map: Cell[]
};

export class KeyboardCatcher {
  private readonly dx: number = 0;

  private readonly dy: number = 0;

  private readonly map: Cell[] = [];

  private position: Cell = {x: 0, y: 0};

  private setPosition: ((value: (((prevState: Cell) =>
  Cell) | Cell)) => void) | undefined;

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

  updatePosition(position: Cell,
    setPosition: ((value: (((prevState: Cell) => Cell) | Cell)) => void)) {
    this.position = position;
    this.setPosition = setPosition;
  }

  handleInput(event: KeyboardEvent) {
    const {code} = event;
    const {x, y} = this.position;
    console.log(this.map);

    if (this.setPosition) {
      switch (code) {
        case 'ArrowLeft':
          this.setPosition({x: x - this.dx, y});
          break;
        case 'ArrowRight':
          this.setPosition({x: x + this.dx, y});
          break;
        case 'ArrowUp':
          this.setPosition({x, y: y - this.dy});
          break;
        case 'ArrowDown':
          this.setPosition({x, y: y + this.dy});
          break;
        default: {
          console.log('Wrong key');
        }
      }
    }
  }
}
