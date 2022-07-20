import React, { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/index";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isUserLoggedIn: false,
  });

  const value = { authState, authDispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
