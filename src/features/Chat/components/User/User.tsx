import React, { FC } from 'react';
import { AvatarPlaceholder } from '@assets/img';
import { OwnProps } from './types';
import './User.css';

type Props = FC<OwnProps>;

export const User: Props = ({ name }) => (
  <div className="user">
    <img src={AvatarPlaceholder} className="user__avatar" alt="avatar" />
    <span className="user__name">{name}</span>
  </div>
);
