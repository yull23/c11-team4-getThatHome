import apiFetch from "./api-fetch/api-fetch";

export function login(credentials) {
  return apiFetch("login", { body: credentials }).then((response) => {
    const user = response;
    return user;
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
