import { useContext } from "react";
import { Context } from "./Context";
import { CommentStore } from "./types";
export default function useConsumer(): CommentStore {
  const store: CommentStore = useContext(Context);
  return store;
}
