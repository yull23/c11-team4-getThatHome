import apiFetch from "./api-fetch/api-fetch";
import { tokenKey } from "./api-fetch/config";

export function login(credentials) {
  return apiFetch("login", { body: credentials }).then((response) => {
    const { token } = response;
    console.log(token);
    return token;
  });
}

export function logout() {
  return apiFetch("logout");
}
