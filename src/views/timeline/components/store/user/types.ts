import { User } from "../../../../../types";

export interface UserUtils {
  user: User | null;
  isUserLoading: boolean;
  getUser: Function;
}
export interface UserStore {
  userUtils: UserUtils;
}
