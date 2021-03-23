type InputParameters = {
  dx: number,
  dy: number,
};

export class KeyboardCatcher {
  private readonly dx: number = 0;

  private readonly dy: number = 0;

  private position: number[] = [0, 0];

  private setPosition: ((value: (((prevState: number[]) =>
  number[]) | number[])) => void) | undefined;

  constructor(inputParameters: InputParameters) {
    this.dx = inputParameters.dx;
    this.dy = inputParameters.dy;
  }

  init() {
    document.addEventListener('keydown', (e) => {
      this.handleInput(e);
    });
  }

  updatePosition(position: number[],
    setPosition: ((value: (((prevState: number[]) => number[]) | number[])) => void)) {
    this.position = position;
    this.setPosition = setPosition;
  }

  handleInput(event: KeyboardEvent) {
    const {code} = event;
    const [x, y] = this.position;

    if (this.setPosition) {
      switch (code) {
        case 'ArrowLeft':
          this.setPosition([x - this.dx, y]);
          break;
        case 'ArrowRight':
          this.setPosition([x + this.dx, y]);
          break;
        case 'ArrowUp':
          this.setPosition([x, y - this.dy]);
          break;
        case 'ArrowDown':
          this.setPosition([x, y + this.dy]);
          break;
        default: {
          this.setPosition([0, 0]);
        }
      }
    }
  }
}
