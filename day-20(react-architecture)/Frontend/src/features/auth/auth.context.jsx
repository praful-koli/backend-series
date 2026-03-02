import { createContext, useState } from "react";
import { login } from "./services/auth.api.js";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginHandle = async (username, password) => {
    setLoading(true);
    try {
      const response = await login(username, password);
      setUser(response.userData);
      return response
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginHandle }}>
      {children}
    </AuthContext.Provider>
  );
}