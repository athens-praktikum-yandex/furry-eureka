import React, { forwardRef } from 'react';
import { Button, ButtonTheme } from '@components/Button';
import { OwnProps } from './types';
import { TopicMessage } from '../TopicMessage';
import './Topic.css';

type Props = OwnProps;

export const Topic = forwardRef<HTMLDivElement, Props>(({
  topicMessageList,
  sendMessage,
  replyHandler,
  replies,
}, ref) => (
  <div className="topic">
    <ul className="topic__list">
      {topicMessageList.map((props) => (
        <TopicMessage
          {...props}
          key={props.id}
          className="topic__message"
          replyHandler={replyHandler}
          replies={replies.filter((reply) => reply.commentId === props.id)}
        />
      ))}
    </ul>
    <div className="topic__textbox-container">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <div
        ref={ref}
        className="topic__textbox"
        role="textbox"
        contentEditable
        placeholder="Message"
      />
      <Button
        theme={ButtonTheme.circle}
        isIcon
        value="send"
        onClick={sendMessage}
      />
    </div>
  </div>
));
