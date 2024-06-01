import { useCallback, useEffect, useState } from "react";
import * as postService from "../../../services/postService";
import useAPIResponse from "../../../hooks/apiResponse";
import { Post } from "../../../types";
import { PostStoreUtils } from "./types";
export default function usePosts(): PostStoreUtils {
  const { handleError } = useAPIResponse();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);
  const listPosts = useCallback(
    async (query: string | "") => {
      setIsPostsLoading(true);
      try {
        let response = await postService.listPosts(query);
        setPosts((prevposts) => {
          let newposts: Post[] = [...prevposts, ...response.data].sort(
            (a: Post, b: Post) => a.id - b.id
          );
          return [...newposts];
        });
      } catch (err) {
        handleError(err);
      } finally {
        setIsPostsLoading(false);
      }
    },
    [handleError]
  );

  useEffect(() => {
    listPosts("");
  }, []);

  function selectPost(post: any) {
    setSelectedPostId(post);
  }
  return {
    posts,
    isPostsLoading,
    selectPost,
    selectedPostId,
  };
}
