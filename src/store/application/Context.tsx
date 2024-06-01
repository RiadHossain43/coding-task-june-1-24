import React, { ReactNode } from "react";
import useStore from "./useStore";
export const Context = React.createContext(undefined);

interface ContainerProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContainerProps> = ({ children }) => {
  let store = useStore({});
  return <Context.Provider value={undefined}>{children}</Context.Provider>;
};
export default ContextProvider;
