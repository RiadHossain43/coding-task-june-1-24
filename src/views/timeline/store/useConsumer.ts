import { useContext } from "react";
import { Context } from "./Context";
import { TimeLineStore } from "./types";
export default function useConsumer(): TimeLineStore {
  const store: TimeLineStore = useContext(Context);
  return store;
}
