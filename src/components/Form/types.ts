import { FormHTMLAttributes } from 'react';

export type FormLinkProps = {
  value: string,
  to: string,
};

type OwnProps = {
  title: string,
  submitText: string,
  link?: FormLinkProps,
};

export type ExtendedOwnProps = OwnProps & FormHTMLAttributes<HTMLFormElement>;
