import React, { ReactNode } from "react";
import { UserStore } from "./types";
import useStore from "./useStore";
export const Context = React.createContext<UserStore>({
  userUtils: {
    user: null,
    getUser: function () {},
    isUserLoading: false,
  },
});

interface ContainerProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContainerProps> = ({ children }) => {
  let store: UserStore = useStore({});
  return <Context.Provider value={store}>{children}</Context.Provider>;
};
export default ContextProvider;
