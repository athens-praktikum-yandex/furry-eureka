import React, { FC } from 'react';
import cn from 'classnames';
import { OwnProps } from './types';
import './TopicMessage.css';

type Props = FC<OwnProps>;

export const TopicMessage: Props = ({
  author, date, content, isOutgoing, className,
}) => (
  <li
    className={cn(
      'topic-message',
      { 'topic-message_type_outgoing': isOutgoing },
      { 'topic-message_type_incoming': !isOutgoing },
      className,
    )}
  >
    <div className="topic-message__header">
      <span className="topic-message__author">{author}</span>
      <time className="topic-message__date">{new Date(date).toUTCString()}</time>
    </div>
    <span>{content}</span>
  </li>
);
