import { InputHTMLAttributes } from 'react';

type OwnProps = {
  name: string,
  classNameWrapper?: string,
  classNameInput?: string,
  label?: string,
  error?: string,
};

export type ExtendedOwnProps = OwnProps & InputHTMLAttributes<HTMLInputElement>;
