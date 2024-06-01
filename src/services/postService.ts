import http from "./httpService";
const apiEndPoint = `/posts`;

/**
 * We can extend this service for other crud endpoints.
 * This is also be extend to nested routes like /post/:postId/comments
 */

export async function listPosts(query: string) {
  return http.get(apiEndPoint + "/?" + query);
}
export async function getPost(id: number) {
  return http.get(apiEndPoint + "/" + id);
}
