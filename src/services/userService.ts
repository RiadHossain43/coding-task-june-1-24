import http from "./httpService";
const apiEndPoint = `/users`;

export async function listPosts(query: string) {
  return http.get(apiEndPoint + "/?" + query);
}
export async function getPost(id: number) {
  return http.get(apiEndPoint + "/" + id);
}
