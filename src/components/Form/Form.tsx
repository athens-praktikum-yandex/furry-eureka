import React, { FormHTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '@components/Button';
import { OwnProps } from './types';
import './Form.css';

type ExtendedOwnProps = OwnProps & FormHTMLAttributes<HTMLFormElement>;

type Props = PropsWithChildren<ExtendedOwnProps>;

export const Form = ({
  children,
  title,
  submitText,
  link,
  className,
  ...props
}: Props) => (
  <form
    className={cn('form', className)}
        // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <h2 className="form__header">{title}</h2>
    {children}
    <div className="form__footer">
      <Button
        type="submit"
        className="form__submit"
      >
        {submitText}
      </Button>
      {link && (
        <Link to={link.to}>{link.value}</Link>
      )}
    </div>
  </form>
);
