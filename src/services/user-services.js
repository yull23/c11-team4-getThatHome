import apiFetch from "./api-fetch/api-fetch";
import { tokenKey } from "./api-fetch/config";

export async function profileUser() {
  const response = await apiFetch("profile");
  if (response == null) {
    return response;
  } else {
    sessionStorage.setItem(tokenKey, response.token);
    return response;
  }
}
