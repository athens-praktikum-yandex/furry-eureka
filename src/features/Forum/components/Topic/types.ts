import { ExtendedOwnProps as ButtonProps } from '@components/Button';
import { Reply } from '@features/Forum/types';
import { OwnProps as TopicMessageProps } from '../TopicMessage';

export type OwnProps = {
  topicMessageList: Omit<TopicMessageProps, 'replyHandler' | 'replies'>[],
  sendMessage: ButtonProps['onClick'],
  replies: Reply[],
  replyHandler: (name: string, id: number) => void,
};
