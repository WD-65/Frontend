import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext value={{ user, setUser, signOut }}>{children}</AuthContext>
  );
};

export { AuthContextProvider, AuthContext };
