import http from "./httpService";
const apiEndPoint = `/comments`;

/**
 * We can extend this service for other crud endpoints.
 * This is also be extend to nested routes like /comments/:postId/rsources
 */

export async function listComments(query: string) {
  return http.get(apiEndPoint + "/?" + query);
}
export async function getComment(id: number) {
  return http.get(apiEndPoint + "/" + id);
}
