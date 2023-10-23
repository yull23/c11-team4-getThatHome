import { tokenKey } from "../../services/api-fetch/config";
import { listBestPrice } from "../../services/properties-services";
import { profileUser } from "../../services/user-services";

export async function loaderHome() {
  const response = {};
  const token = sessionStorage.getItem(tokenKey);
  if (token == null) {
    response.user = null;
  } else {
    response.user = await profileUser();
  }
  response.bestProperties = await listBestPrice();

  return response;
}
