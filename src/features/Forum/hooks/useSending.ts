import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { createComment, createReply } from '../store/actions';
import { placeCaretAtEnd } from '../utils';

export const useSending = ({ ownerId, selectedTopicId }: {
  ownerId: number,
  selectedTopicId: number,
}) => {
  const dispatch = useDispatch();
  const ref = useRef<null | HTMLDivElement>(null);

  // replying

  const [replyName, setReplyName] = useState<string>('');
  const [replyCommentId, setReplyCommentId] = useState<number>(0);

  useEffect(() => {
    if (replyName && ref.current) {
      ref.current.textContent = `${replyName}, `;
      placeCaretAtEnd(ref.current);
    }
  }, [replyName, ref]);

  const replyButtonHandler = useCallback((name: string, commentId: number) => {
    setReplyName(name);
    setReplyCommentId(commentId);
  }, []);

  // sending

  const sendButtonHandler = useCallback(() => {
    const message = ref.current?.textContent;

    if (ref.current && message && ownerId && selectedTopicId) {
      const createAction = replyCommentId
        ? createReply.bind(null, { message, ownerId, commentId: replyCommentId })
        : createComment.bind(null, { message, ownerId, topicId: selectedTopicId });

      dispatch(createAction());

      ref.current.textContent = '';
      setReplyName('');
      setReplyCommentId(0);
    }
  }, [ref, ownerId, selectedTopicId, replyCommentId]);

  return {
    sendButtonHandler,
    replyButtonHandler,
    ref,
  };
};
