import { tokenKey } from "../../services/api-fetch/config";
import { listBestPrice } from "../../services/properties-services";

export async function loaderHome() {
  const response = {};
  response.bestProperties = await listBestPrice();
  return response;
}
