import React, { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Button, ButtonTheme } from '@components/Button';
import { ExtendedOwnProps, FormLinkType } from './types';
import './Form.css';

export const Form: FC<ExtendedOwnProps> = ({
  children,
  title,
  submitText,
  links,
  className,
  ...props
}) => (
  <form
    className={cn('form', className)}
    {...props}
  >
    <h2 className="form__header">{title}</h2>
    <div className="form__content">
      {children}
    </div>
    <div className="form__footer">
      <Button
        type="submit"
        className="form__submit"
        value={submitText}
      />
      {links?.length && links.map((link) => (
        link.type === FormLinkType.LINK ? (
          <Link
            key={link.value}
            to={link.to}
            className="form__link"
          >
            {link.value}
          </Link>
        ) : (
          <Button
            key={link.value}
            value={link.value}
            theme={ButtonTheme.transparent}
            onClick={link.onClick}
            className="form__button"
          />
        )
      ))}
    </div>
  </form>
);
