import React, { ReactNode } from "react";
import useStore from "./useStore";
import { TimeLineStore } from "./types";
export const Context = React.createContext<TimeLineStore>({
  postStoreUtils: {
    posts: [],
    isPostsLoading: false,
    selectPost: function () {},
    selectedPostId: null,
  },
});

interface ContainerProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContainerProps> = ({ children }) => {
  let store: TimeLineStore = useStore({});
  return <Context.Provider value={store}>{children}</Context.Provider>;
};
export default ContextProvider;
