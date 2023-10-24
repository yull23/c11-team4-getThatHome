import { showUser } from "../../services/user-services";

export async function loaderProfile() {
  const userId = localStorage.getItem("user_id");
  const user = await showUser(userId);
  return user;
}
