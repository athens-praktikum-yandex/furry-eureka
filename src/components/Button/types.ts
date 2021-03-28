import { ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
  circle = 'circle',
  square = 'square',
  transparent = 'transparent',
}

type OwnProps = {
  theme?: ButtonTheme,
  isIcon?: boolean,
};

export type ExtendedOwnProps = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;
