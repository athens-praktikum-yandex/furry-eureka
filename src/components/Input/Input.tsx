import React, { FC } from 'react';
import cn from 'classnames';
import { ExtendedOwnProps } from './types';
import './Input.css';

export const Input: FC<ExtendedOwnProps> = ({
  classNameWrapper,
  className,
  label,
  error,
  name,
  ...props
}) => (
  <div className={cn('input-wrapper', classNameWrapper)}>
    <label htmlFor={name}>
      {label && (
      <span className="input-wrapper__label">{label}</span>
      )}
      <input
        id={name}
        name={name}
        className={cn(
          'input-wrapper__input',
          { 'input-wrapper__input_error': error },
          className,
        )}
        {...props}
      />
      {error && (
      <span className="input-wrapper__error">{error}</span>
      )}
    </label>
  </div>
);
