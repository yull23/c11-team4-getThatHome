import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getUser } from "../services/user-services";
import * as users from "../services/session-services";
import { tokenKey } from "../services/api-fetch/config";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((error) => console.log("Error => ", error));
  }, []);

  function login(credentials) {
    users
      .login(credentials)
      .then((user) => {
        setUser(user);
        sessionStorage.setItem(tokenKey, user.token);
        localStorage.setItem("role", user.role_id);
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }
  function logout() {
    users.logout().then((response) => {
      sessionStorage.removeItem(tokenKey);
      localStorage.removeItem("role");

      setUser(null);
    });
  }
  function signup(credentials) {
    users.signup(credentials).then((user) => {
      sessionStorage.setItem(tokenKey, user.token);
      localStorage.setItem("role", user.role_id);
      setUser(user);
    });
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
