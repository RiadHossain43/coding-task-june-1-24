import http from "./httpService";
const apiEndPoint = `/users`;

/**
 * We can extend this service for other crud endpoints.
 * This is also be extend to nested routes like /users/:postId/rsources
 */

export async function listUsers(query: string) {
  return http.get(apiEndPoint + "/?" + query);
}
export async function getUser(id: number) {
  return http.get(apiEndPoint + "/" + id);
}
