import { Resources } from '../resources';
import { Cell } from '../map-generation';

export class Sprite {
  private readonly url: string = '';

  private readonly picturePos: number[] = [];

  private readonly frameSize: number[] = [];

  private readonly pictureSize: number[] = [];

  private readonly speed?: number;

  private readonly frames?: number[];

  private readonly dir?: string;

  private readonly once?: boolean;

  private index: number = 0;

  done: boolean = false;

  inprogress: boolean = false;

  private readonly afterAnimationCallback: (() => void) | undefined;

  private isAllowAnimation: boolean = true;

  constructor(
    url: string,
    picturePos: number[],
    frameSize: number[],
    pictureSize: number[],
    speed?: number,
    frames?: number[],
    dir?: string,
    once?: boolean,
    afterAnimationCallback?: () => void,
  ) {
    this.url = url;
    this.picturePos = picturePos;
    this.frameSize = frameSize;
    this.pictureSize = pictureSize;
    this.speed = speed;
    this.frames = frames;
    this.dir = dir || 'horizontal';
    this.once = once;
    this.index = 0;
    this.done = false;
    this.inprogress = false;
    this.afterAnimationCallback = afterAnimationCallback;
  }

  reset() {
    this.index = 0;
    this.done = false;
    this.inprogress = false;
  }

  startAnimation() {
    this.isAllowAnimation = true;
  }

  stopAnimation() {
    this.isAllowAnimation = false;
  }

  update(dt: number) {
    if (this.speed !== undefined) {
      this.index += this.speed * dt;
    }
  }

  render(ctx: CanvasRenderingContext2D | null, resources: Resources, position: Cell) {
    if (ctx) {
      let frame;
      if (this.speed && this.speed > 0) {
        const max = Array.isArray(this.frames) ? this.frames.length : 0;
        const idx = Math.floor(this.index);
        frame = Array.isArray(this.frames) ? this.frames[idx % max] : 0;

        if (this.once && idx >= max) {
          this.done = true;
          this.inprogress = false;
          if (this.isAllowAnimation && this.afterAnimationCallback) {
            this.afterAnimationCallback();
          }
          return;
        }
      } else {
        frame = 0;
      }

      let x = this.picturePos[0];
      let y = this.picturePos[1];

      if (this.dir === 'vertical') {
        y += frame * this.frameSize[1];
      } else {
        x += frame * this.frameSize[0];
      }
      if (this.isAllowAnimation) {
        ctx.drawImage(
          resources.get(this.url),
          x,
          y,
          this.pictureSize[0],
          this.pictureSize[1],
          position.x - Math.floor(this.pictureSize[0] / 2),
          position.y - Math.floor(this.pictureSize[1] / 2),
          this.pictureSize[0],
          this.pictureSize[1],
        );
      }
    }
  }
}
