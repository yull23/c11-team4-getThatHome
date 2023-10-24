import apiFetch from "./api-fetch/api-fetch";

export function getUser() {
  return apiFetch("/profile").then((response) => {
    const { _token, ...user } = response;
    return user;
  });
}

export function showUser(id) {
  return apiFetch(`users/${id}`).then((response) => response);
}
