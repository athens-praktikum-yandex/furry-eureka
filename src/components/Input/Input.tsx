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
  ...props
}) => (
  <div className={cn('input-wrapper', classNameWrapper)}>
    {label && (
      <span className="input-wrapper__label">{label}</span>
    )}
    <input
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
  </div>
);
