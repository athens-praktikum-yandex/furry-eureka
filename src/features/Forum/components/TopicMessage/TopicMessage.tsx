import React, { FC } from 'react';
import cn from 'classnames';
import { Button, ButtonTheme } from '@components/Button';
import { OwnProps } from './types';
import './TopicMessage.css';

type Props = FC<OwnProps>;

export const TopicMessage: Props = ({
  name,
  id,
  message,
  replies,
  className,
  replyHandler,
}) => (
  <>
    <li className={cn('topic-message', className)}>
      <div className="topic-message__header">
        <span className="topic-message__author">{name}</span>
        <Button
          theme={ButtonTheme.transparent}
          value="Reply"
          onClick={() => replyHandler(name, id!)}
        />
      </div>
      <span>{message}</span>
    </li>
    {replies.map((reply) => (
      <li className={cn('topic-message', 'topic-message__reply')} key={reply.id}>
        <span>{reply.message}</span>
      </li>
    ))}
  </>
);
