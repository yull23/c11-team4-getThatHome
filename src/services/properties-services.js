import apiFetch from "./api-fetch/api-fetch";
import { tokenKey } from "./api-fetch/config";

export async function indexProperties() {
  const properties = await apiFetch("properties");
  return properties;
}
export async function listBestPrice() {
  const properties = await apiFetch("listBestPrice");
  const showProperties = properties.map((property) => {
    return {
      ...property.property,
      ...property.property_address,
      typeProperty: property.property_type.name,
    };
  });
  return showProperties;
}
export async function showProperty({ params }) {
  console.log(params.id);
  const property = await apiFetch(`properties/${params.id}`);
  console.log(property);
  return property.id;
}
