import React, { FC } from 'react';
import cn from 'classnames';
import { ExtendedOwnProps } from './types';
import './TopicItem.css';

type Props = FC<ExtendedOwnProps>;

export const TopicItem: Props = ({
  title,
  time,
  text,
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
        <span className="topic-item__name">{title}</span>
        <time className="topic-item__time">{time}</time>
      </div>

      <span className="topic-item__message">
        {text}
      </span>
    </div>
  </li>
);
