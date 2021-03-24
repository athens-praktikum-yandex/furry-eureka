import React, { FC, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import { OwnProps } from './types';
import './Button.css';

type ExtendedOwnProps = OwnProps & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = FC<ExtendedOwnProps>;

export const Button: Props = ({
  className,
  theme,
  content,
  isIcon,
  ...props
}) => (
  <button
    className={cn(
      'button',
      `button_theme_${theme}`,
      className,
    )}
    type="button"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {isIcon ? (
      <i className={`icon-${content}`} />
    ) : (
      <span className="button__inner">{content}</span>
    )}
  </button>
);
