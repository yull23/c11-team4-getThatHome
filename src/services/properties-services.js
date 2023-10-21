import apiFetch from "./api-fetch/api-fetch";
import { tokenKey } from "./api-fetch/config";

function propertyView(property) {
  return {
    propertyID: property.property.id,
    ...property.property,
    ...property.property_address,
    typeProperty: property.property_type.name,
  };
}

export async function indexProperties() {
  const properties = await apiFetch("properties");
  const allProperties = properties.map((property) => propertyView(property));
  return allProperties;
}
export async function listBestPrice() {
  const properties = await apiFetch("listBestPrice");
  const showProperties = properties.map((property) => propertyView(property));
  return showProperties;
}
export async function showProperty({ params }) {
  const property = await apiFetch(`properties/${params.id}`);
  return propertyView(property);
}
