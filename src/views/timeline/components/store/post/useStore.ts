import { CommentStore } from "./types";
import useComments from "./useComments";
export default function useStore(): CommentStore {
  const commentUtils = useComments();
  return {
    commentUtils,
  };
}
