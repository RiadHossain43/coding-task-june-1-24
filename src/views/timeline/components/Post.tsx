import React, { useEffect } from "react";
import { Comment, Post } from "../../../types";
import CommentUI from "./Comment";
import { usePost } from "./store/post";
import { useUser } from "./store/user";

const PostUI: React.FC<Post> = ({
  title,
  body,
  id,
  userId,
}): React.ReactElement => {
  const { commentUtils } = usePost();
  const { userUtils } = useUser();
  useEffect(() => {
    userUtils.getUser(userId);
  }, []);
  return (
    <React.Fragment>
      <h6>{userUtils?.user?.name}</h6>
      <h1 className="text-xl">{title}</h1>
      <p>{body}</p>
      <button onClick={() => commentUtils.listComments("postId=" + String(id))}>
        View comments
      </button>
      {commentUtils.comments.map((comment: Comment) => {
        return <CommentUI key={String(comment.id)} {...comment} />;
      })}
      <hr />
    </React.Fragment>
  );
};

export default PostUI;
