import React, { FC } from 'react';
import cn from 'classnames';
import { ExtendedOwnProps } from './types';
import './TopicItem.css';

type Props = FC<ExtendedOwnProps>;

export const TopicItem: Props = ({
  name,
  isSelected = false,
  ...props
}) => (
  <li
    className={cn(
      'topic-item',
      { 'topic-item_selected': isSelected },
    )}
    {...props}
  >
    <div className="topic-item__content">
      <div className="topic-item__header">
        <span className="topic-item__name">{name}</span>
      </div>
    </div>
  </li>
);
