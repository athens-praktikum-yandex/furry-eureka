import { InputHTMLAttributes } from 'react';

type OwnProps = {
  name: string,
  label: string,
};

export type ExtendedOwnProps = OwnProps & InputHTMLAttributes<HTMLInputElement>;
