import { TimeLineStore } from "./types";
import usePosts from "./usePosts";
export default function useStore(): TimeLineStore {
  const postStoreUtils = usePosts();
  return {
    postStoreUtils,
  };
}
