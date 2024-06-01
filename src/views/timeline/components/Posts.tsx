import React from "react";
import PostUI from "./Post";
import { useTimeline } from "../store";
import { Post } from "../../../types";
import { PostContextProvider } from "./store/post";
import { UserContextProvider } from "./store/user";

interface Posts {
  posts: [Post];
}
const Posts: React.FC = ({}): React.ReactElement => {
  let { postStoreUtils } = useTimeline();
  return (
    <React.Fragment>
      {postStoreUtils.posts.map((post: Post) => {
        return (
          <PostContextProvider key={String(post.id)}>
            <UserContextProvider>
              <PostUI {...post} />
            </UserContextProvider>
          </PostContextProvider>
        );
      })}
    </React.Fragment>
  );
};

export default Posts;
