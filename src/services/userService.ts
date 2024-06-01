import http from "./httpService";
const apiEndPoint = `/users`;

export async function listUsers(query: string) {
  return http.get(apiEndPoint + "/?" + query);
}
export async function getUser(id: number) {
  return http.get(apiEndPoint + "/" + id);
}
