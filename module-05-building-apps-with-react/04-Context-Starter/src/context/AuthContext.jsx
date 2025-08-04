import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext value={{ toggleAuth, isAuthenticated }}>
      {children}
    </AuthContext>
  );
};

export { AuthContext, AuthContextProvider };
