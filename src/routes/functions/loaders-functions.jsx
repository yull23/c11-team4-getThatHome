import { properties, rentals } from "../../data/properties";

const data = [...properties, ...rentals];

export function loaderPropertiesPage() {
  return [...data, ...data, ...data];
}
export function loaderPropertiesFavorites() {
  return data;
}
export function loaderPropertiesContacted() {
  return data;
}
export function loaderPropertiesClosed() {
  return data;
}
export function loaderPropertiesActive() {
  return data;
}
