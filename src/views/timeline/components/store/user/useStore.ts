import { UserStore } from "./types";
import useUsers from "./useUsers";
export default function useStore({}): UserStore {
  const userUtils = useUsers({});
  return {
    userUtils,
  };
}
