import React, { ReactNode } from "react";
import useStore from "./useStore";
export const Context = React.createContext(undefined);

interface ContainerProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContainerProps> = ({ children }) => {
  let store: any = useStore();
  return <Context.Provider value={store}>{children}</Context.Provider>;
};
export default ContextProvider;
