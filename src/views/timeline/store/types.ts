import { Post, User } from "../../../types";
export interface PostStoreUtils {
  posts: Post[];
  isPostsLoading: boolean;
  selectPost: Function;
  selectedPostId: number | null;
}
export interface TimeLineStore {
  postStoreUtils: PostStoreUtils;
}
