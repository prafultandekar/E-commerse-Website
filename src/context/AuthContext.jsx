import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

 const login = (email, password) => {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if (savedUser && savedUser.email === email && savedUser.password === password) {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
    return true;
  } else {
    return false;
  }
};


  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
