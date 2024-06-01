import React from "react";
import { Comment } from "../../../types";
import { useTimeline } from "../store";
const CommentUI: React.FC<Comment> = ({
  name,
  body,
  email,
}): React.ReactElement => {
  return (
    <React.Fragment>
      <h5 className="text-blue-900">{name}</h5>
      <small className="text-blue-800">{body}</small>
      <br />
    </React.Fragment>
  );
};

export default CommentUI;
