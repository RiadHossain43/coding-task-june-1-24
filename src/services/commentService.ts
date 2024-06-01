import http from "./httpService";
const apiEndPoint = `/comments`;

export async function listComments(query: string) {
  return http.get(apiEndPoint + "/?" + query);
}
export async function getComment(id: number) {
  return http.get(apiEndPoint + "/" + id);
}
