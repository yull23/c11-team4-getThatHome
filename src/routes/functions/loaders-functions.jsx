import { properties, rentals } from "../../data/properties";

const data = [...properties, ...rentals];

export function loaderPropertiesPage() {
  console.log([...data, ...data, ...data].length);
  return [...data, ...data, ...data];
}
