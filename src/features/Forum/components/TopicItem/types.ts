import { LiHTMLAttributes } from 'react';

export type OwnProps = {
  name: string,
  isSelected?: boolean,
};

export type ExtendedOwnProps = OwnProps & LiHTMLAttributes<HTMLLIElement>;
