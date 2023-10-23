import { redirect } from "react-router-dom";
import { tokenKey } from "../../services/api-fetch/config";
import apiFetch from "../../services/api-fetch/api-fetch";

export async function actionLogin({ request }) {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  console.log(credentials);
  const response = await apiFetch("login", { body: credentials });
  console.log(response);
  if (response.error) {
    // Muestra el mensaje de error en función del objeto de error
    // Por ejemplo:
    // showErrorMessage("Error por datos incorrectos");
    console.log("Error");
  } else {
    const { token } = response;
    sessionStorage.setItem(tokenKey, token);
    return redirect(`/`);
  }
}
