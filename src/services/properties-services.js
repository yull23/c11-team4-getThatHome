import apiFetch from "./api-fetch/api-fetch";
// import { tokenKey } from "./api-fetch/config";

function propertyView(property) {
  return {
    propertyID: property.property.id,
    ...property.property,
    ...property.property_address,
    typeProperty: property.property_type.name,
  };
}

export async function myProperty() {
  const properties = await apiFetch("my_property");
  const myProperties = properties.map((property) => propertyView(property));
  return myProperties;
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

export async function favoriteProperties() {
  const properties = await apiFetch("favorite");
  const showProperties = properties.map((property) => propertyView(property));
  return showProperties;
}
export async function propertiesContacted() {
  const properties = await apiFetch("contact");
  const showProperties = properties.map((property) => propertyView(property));
  return showProperties;
}

export function deleteProperty(id) {
  return apiFetch(`properties/${id}`, { method: "DELETE" }).then(
    (response) => response
  );
}

export function updateActiveStatus(id) {
  return apiFetch("my_property", {
    method: "PUT",
    body: { property_id: id },
  }).then((response) => response);
}

export async function statusPropertyUser(id) {
  const statusUser = {
    contact: false,
    favorite: false,
    user_property: null,
    id: null,
  };

  const contactProperties = await apiFetch("contact");
  const favoriteProperties = await apiFetch("favorite");
  const contactPropertyFound = contactProperties.find(
    (property) => property.property.id === id
  );
  const favoritePropertyFound = favoriteProperties.find(
    (property) => property.property.id === id
  );

  if (contactPropertyFound) {
    statusUser.contact = true;
    statusUser.user_property = contactPropertyFound.property.user_id;
    statusUser.id = contactPropertyFound.property.id;
  }
  if (favoritePropertyFound) {
    statusUser.favorite = true;
    statusUser.user_property = favoritePropertyFound.property.user_id;
    statusUser.id = favoritePropertyFound.property.id;
  }

  return statusUser;
}

export function showProfile(id) {
  return apiFetch(`users/${id}`).then((response) => response);
}
