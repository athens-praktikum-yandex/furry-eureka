import React, { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import { OwnProps } from './types';
import './Input.css';

type ExtendedOwnProps = OwnProps & InputHTMLAttributes<HTMLInputElement>;

type Props = FC<ExtendedOwnProps>;

export const Input: Props = ({
  classNameWrapper,
  classNameInput,
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
          classNameInput,
        )}
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {error && (
      <span className="input-wrapper__error">{error}</span>
      )}
    </label>
  </div>
);
