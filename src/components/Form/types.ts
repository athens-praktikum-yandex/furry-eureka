import { FormHTMLAttributes } from 'react';

export enum FormLinkType {
  LINK = 'LINK',
  BUTTON = 'BUTTON',
}

type FormLinkPropsButtonType = {
  type: FormLinkType.BUTTON,
  onClick: (React.MouseEventHandler<HTMLButtonElement> | undefined),
};

type FormLinkPropsLinkType = {
  type: FormLinkType.LINK
  to: string,
};

export type FormLinkProps = {
  value: string,
} & (FormLinkPropsButtonType | FormLinkPropsLinkType);

type OwnProps = {
  title: string,
  submitText: string,
  links?: FormLinkProps[],
};

export type ExtendedOwnProps = OwnProps & FormHTMLAttributes<HTMLFormElement>;
