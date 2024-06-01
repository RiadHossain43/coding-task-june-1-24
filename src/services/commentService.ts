import http from "./httpService";
const apiEndPoint = `/comments`;

export async function listPosts(query: string) {
  return http.get(apiEndPoint + "/?" + query);
}
export async function getPost(id: number) {
  return http.get(apiEndPoint + "/" + id);
}
