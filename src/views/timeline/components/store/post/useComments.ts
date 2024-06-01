import { useCallback, useState } from "react";
import useAPIResponse from "../../../../../hooks/apiResponse";
import * as commentService from "../../../../../services/commentService";
import { Comment } from "../../../../../types";
import { CommentUtils } from "./types";
export default function useComments({}): CommentUtils {
  const { handleError } = useAPIResponse();
  const [comments, setComments] = useState<Comment[]>([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(false);
  const listComments = useCallback(async (query: string | "") => {
    setIsCommentsLoading(true);
    try {
      let response = await commentService.listComments(query);
      setComments(response.data);
    } catch (err) {
      handleError(err);
    } finally {
      setIsCommentsLoading(false);
    }
  }, []);

  return {
    comments,
    isCommentsLoading,
    listComments,
  };
}
