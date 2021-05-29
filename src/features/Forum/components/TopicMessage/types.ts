import { Comment, Reply } from '@features/Forum/types';

export type OwnProps = {
  name: string,
  replies: Reply[],
  replyHandler: (name: string, id: number) => void,
  className?: string,
} & Partial<Comment>;
