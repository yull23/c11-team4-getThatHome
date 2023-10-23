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

export function signup(credentials) {
  return apiFetch("users", { method: "POST", body: credentials }).then(
    (response) => {
      const { _token, ...user } = response;
      return user;
    }
  );
}
