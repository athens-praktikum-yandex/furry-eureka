import { ButtonHTMLAttributes } from 'react';

export enum ButtonTextSize {
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
  xxxl = 'xxxl',
}

export enum ButtonTheme {
  circle = 'circle',
  square = 'square',
  transparent = 'transparent',
}

type OwnProps = {
  theme?: ButtonTheme,
  value: string,
  isIcon?: boolean,
  textSize?: ButtonTextSize,
};

export type ExtendedOwnProps = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;
