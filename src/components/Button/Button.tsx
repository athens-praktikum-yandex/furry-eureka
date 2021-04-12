import React, { FC } from 'react';
import cn from 'classnames';
import { ButtonTextSize, ButtonTheme, ExtendedOwnProps } from './types';
import './Button.css';

type Props = FC<ExtendedOwnProps>;

export const Button: Props = ({
  className,
  value,
  theme = ButtonTheme.square,
  isIcon = false,
  textSize = ButtonTextSize.xl,
  ...props
}) => (
  <button
    className={cn(
      'button',
      `button_theme_${theme}`,
      className,
    )}
    type="button"
    {...props}
  >
    {isIcon ? (
      <i
        className={cn(
          `icon-${value}`,
          `button_text-size_${textSize}`,
        )}
      />
    ) : (
      <span
        className={cn(
          'button__inner',
          `button_text-size_${textSize}`,
        )}
      >
        {value}
      </span>
    )}
  </button>
);
