import { tokenKey } from "../../services/api-fetch/config";
import { listBestPrice } from "../../services/properties-services";
import { loginUser } from "../../services/session-services";
import { profileUser } from "../../services/user-services";

export async function loaderHome() {
  const response = {};
  // const credentials = {
  //   email: "user1@example.com",
  //   password: "password",
  // };

  // await loginUser(credentials);

  const token = sessionStorage.getItem(tokenKey);
  if (token == null) {
    response.user = null;
  } else {
    response.user = await profileUser();
  }
  response.bestProperties = await listBestPrice();

  return response;
}

// http://127.0.0.1:3000/contact 401
