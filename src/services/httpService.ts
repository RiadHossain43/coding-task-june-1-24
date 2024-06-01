import axios from "axios";
const HTTP_DEFAULT = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

let http = {
  instance: HTTP_DEFAULT,
  get: HTTP_DEFAULT.get,
  post: HTTP_DEFAULT.post,
  put: HTTP_DEFAULT.put,
  patch: HTTP_DEFAULT.patch,
  delete: HTTP_DEFAULT.delete,
};
export default http;
