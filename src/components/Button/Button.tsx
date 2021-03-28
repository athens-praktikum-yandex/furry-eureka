import React, { FC } from 'react';
import cn from 'classnames';
import { ButtonTheme, ExtendedOwnProps } from './types';
import './Button.css';

type Props = FC<ExtendedOwnProps>;

export const Button: Props = ({
  className,
  children,
  theme = ButtonTheme.square,
  isIcon = false,
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
      <i className={`icon-${children}`} />
    ) : (
      <span className="button__inner">{children}</span>
    )}
  </button>
);
