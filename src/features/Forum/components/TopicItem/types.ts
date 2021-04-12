import { LiHTMLAttributes } from 'react';

export type OwnProps = {
  title: string,
  time: string,
  text: string,
  id?: number,
  isSelected?: boolean,
};

export type ExtendedOwnProps = OwnProps & LiHTMLAttributes<HTMLLIElement>;
