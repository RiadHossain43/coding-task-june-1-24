import React from "react";
import PostUI from "./Post";
import { useTimeline } from "../store";
import { Post } from "../../../types";
import { PostContextProvider } from "./store/post";
import { UserContextProvider } from "./store/user";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import PostSkeleton from "./PostSkeleton";

const Posts: React.FC = (): React.ReactElement => {
  let { postStoreUtils } = useTimeline();
  const [postsRef] = useAutoAnimate();
  return (
    <React.Fragment>
      <div ref={postsRef} className="box-border max-w-2xl mx-auto">
        {postStoreUtils.posts.map((post: Post) => {
          return (
            <PostContextProvider key={String(post.id)}>
              <UserContextProvider>
                <PostUI {...post} />
              </UserContextProvider>
            </PostContextProvider>
          );
        })}
        {postStoreUtils.isPostsLoading &&
          [1, 2].map((id) => <PostSkeleton key={id} id={id} />)}
      </div>
    </React.Fragment>
  );
};

export default Posts;
