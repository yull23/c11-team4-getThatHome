import apiFetch from "./api-fetch/api-fetch";
import { tokenKey } from "./api-fetch/config";

export async function loginUser(credentials = { email: "", password: "" }) {
  const { token } = await apiFetch("login", { body: credentials });

  sessionStorage.setItem(tokenKey, token);
  return credentials;
}

export async function profileUser() {
  const { token, user } = await apiFetch("profile");
  console.log(token, user);

  sessionStorage.setItem(tokenKey, token);
  return user;
}
