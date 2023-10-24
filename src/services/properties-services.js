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

export async function statusPropertyUser(statusUser) {
  const contactProperties = await apiFetch("contact");
  const favoriteProperties = await apiFetch("favorite");
  const contactPropertyFound = contactProperties.find(
    (property) => property.property.id === statusUser.idProperty
  );
  const favoritePropertyFound = favoriteProperties.find(
    (property) => property.property.id === statusUser.idProperty
  );

  if (contactPropertyFound) {
    statusUser.exists = true;
    statusUser.contact = true;
    statusUser.userProperty = contactPropertyFound.property.user_id;
    statusUser.idProperty = contactPropertyFound.property.id;
  }
  if (favoritePropertyFound) {
    statusUser.exists = true;
    statusUser.favorite = true;
    statusUser.userProperty = favoritePropertyFound.property.user_id;
    statusUser.idProperty = favoritePropertyFound.property.id;
  }
  return statusUser;
}

export function showProfile(id) {
  return apiFetch(`users/${id}`).then((response) => response);
}

export async function initFavorite(propertyID) {
  const status = {
    exists: false,
    favorite: false,
  };
  const allProperties = await apiFetch("property_users");
  const propertyFound = allProperties.find(
    (property) => property.property.id === propertyID
  );
  if (propertyFound) {
    status.exists = true;
    status.favorite = true;
  }
  return status;
}

export async function updateFavorite(status) {
  if (status.exists) {
    const credentials = {
      property_user: {
        favorite: !status.favorite,
      },
    };
    const response = await apiFetch(`property_users/${status.idProperty}`, {
      method: "PUT",
      body: credentials,
    });
    status.favorite = !status.favorite;
  } else {
    const credentials = {
      property_user: {
        property_id: status.idProperty,
        favorite: true,
        contacted: false,
      },
    };
    const response = await apiFetch("property_users", {
      body: credentials,
    });
    status.exists = true;
    status.favorite = true;
  }
  return status;
}

export async function updateContact(status) {
  if (status.exists) {
    const credentials = {
      property_user: {
        contacted: !status.contacted,
      },
    };
    const response = await apiFetch(`property_users/${status.idProperty}`, {
      method: "PUT",
      body: credentials,
    });
    status.favorite = !status.favorite;
  } else {
    const credentials = {
      property_user: {
        property_id: status.idProperty,
        favorite: status.favorite,
        contacted: true,
      },
    };
    const response = await apiFetch("property_users", {
      body: credentials,
    });
    status.exists = true;
    status.contact = true;
  }
  return status;
}
