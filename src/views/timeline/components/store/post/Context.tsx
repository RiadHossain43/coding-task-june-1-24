import React, { ReactNode } from "react";
import useStore from "./useStore";
import { CommentStore } from "./types";
export const Context = React.createContext<CommentStore>({
  commentUtils: {
    comments: [],
    isCommentsLoading: false,
    listComments: function () {},
  },
});

interface ContainerProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContainerProps> = ({ children }) => {
  let store: CommentStore = useStore({});
  return <Context.Provider value={store}>{children}</Context.Provider>;
};
export default ContextProvider;
