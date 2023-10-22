import apiFetch from "./api-fetch/api-fetch";
import { tokenKey } from "./api-fetch/config";

export async function loginUser(credentials = { email: "", password: "" }) {
  const { token } = await apiFetch("login", { body: credentials });
  sessionStorage.setItem(tokenKey, token);
  return token;
}
export async function logout() {
  await apiFetch("logout");
  sessionStorage.removeItem(tokenKey);
  return null;
}
