import { User, Post, Comment } from "../../../../../types";
export interface CommentUtils {
  comments: Comment[];
  isCommentsLoading: boolean;
  listComments: Function;
}

export interface CommentStore {
  commentUtils: CommentUtils;
}
