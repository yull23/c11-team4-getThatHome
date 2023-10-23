import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getUser } from "../services/user-services";
import * as users from "../services/session-services";
import { tokenKey } from "../services/api-fetch/config";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Getting the current user
  useEffect(() => {
    getUser()
      .then((user) => setUser(user))
      .catch((error) => console.log("Error => ", error));
  }, []);

  function login(credentials) {
    users
      .login(credentials)
      .then((token) => {
        sessionStorage.setItem(tokenKey, token);
        setUser(true);
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }
  function logout() {
    users.logout().then((response) => {
      console.log(response);
      sessionStorage.removeItem(tokenKey);
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
