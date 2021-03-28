import React, { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '@components/Button';
import { ExtendedOwnProps } from './types';
import './Form.css';

export const Form: FC<ExtendedOwnProps> = ({
  children,
  title,
  submitText,
  link,
  className,
  ...props
}) => (
  <form
    className={cn('form', className)}
    {...props}
  >
    <h2 className="form__header">{title}</h2>
    {children}
    <div className="form__footer">
      <Button
        type="submit"
        className="form__submit"
        value={submitText}
      />
      {link && (
        <Link to={link.to}>{link.value}</Link>
      )}
    </div>
  </form>
);
