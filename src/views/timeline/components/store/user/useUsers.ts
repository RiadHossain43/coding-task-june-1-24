import { useCallback, useEffect, useState } from "react";
import * as userService from "../../../../../services/userService";
import useAPIResponse from "../../../../../hooks/apiResponse";
import { User } from "../../../../../types";
import { UserUtils } from "./types";
export default function useUsers({}): UserUtils {
  const { handleError } = useAPIResponse();
  const [user, setUser] = useState<User | null>(null);
  const [isUserLoading, setIsUserLoading] = useState<boolean>(false);
  const getUser = useCallback(async (id: number) => {
    setIsUserLoading(true);
    try {
      let response = await userService.getUser(id);
      let user: User = {
        id: response.data?.id,
        name: response.data?.name,
        username: response.data?.username,
        email: response.data?.email,
      };
      setUser(user);
    } catch (err) {
      handleError(err);
    } finally {
      setIsUserLoading(false);
    }
  }, [handleError]);

  return {
    user,
    getUser,
    isUserLoading,
  };
}
