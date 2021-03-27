export enum ButtonTheme {
  circle = 'circle',
  square = 'square',
  transparent = 'transparent',
}

export type OwnProps = {
  theme?: ButtonTheme,
  isIcon?: boolean,
};
