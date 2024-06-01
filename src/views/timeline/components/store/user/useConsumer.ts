import { useContext } from "react";
import { Context } from "./Context";
import { UserStore } from "./types";
export default function useConsumer(): UserStore {
  const store: UserStore = useContext(Context);
  return store;
}
