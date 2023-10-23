import apiFetch from "./api-fetch/api-fetch";
import { tokenKey } from "./api-fetch/config";

export function getUser() {
  // Se diseña así, porque según la API, sea correcto o incorrecto el token, retorna el usuario o el token, y ambas respuestas son 200 OK
  return apiFetch("/profile").then((response) => {
    const { _token, ...user } = response;
    return user;
  });
}
