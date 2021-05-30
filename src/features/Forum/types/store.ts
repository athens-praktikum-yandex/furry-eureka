export type ForumUser = {
  id: number,
  name: string,
};

export type Topic = {
  id: number,
  name: string,
  ownerId: number,
};

export type Comment = {
  id: number,
  message: string,
  topicId: number,
  ownerId: number,
};

export type Reply = {
  id: number,
  message: string,
  commentId: number,
  ownerId: number,
};

export type CreateUserResponse = ForumUser;
export type CreateTopicResponse = Topic;
export type CreateCommentResponse = Comment;
export type CreateReplyResponse = Reply;

export type CreateUserRequest = Omit<ForumUser, 'id'>;
export type CreateTopicRequest = Omit<Topic, 'id'>;
export type CreateCommentRequest = Omit<Comment, 'id'>;
export type CreateReplyRequest = Omit<Reply, 'id'>;

export type GetUsersResponse = ForumUser[];
export type GetTopicsResponse = Topic[];
export type GetCommentsResponse = Comment[];
export type GetRepliesResponse = Reply[];

export type ForumState = {
  users: ForumUser[],
  topics: Topic[],
  comments: Comment[],
  replies: Reply[],
};
