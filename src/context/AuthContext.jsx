import { createContext, useState } from "react";
import { loginAPI } from "../services/allAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("currentUser"))
  );

  // LOGIN
  const login = async (email, password) => {
    const res = await loginAPI({ email, password });

    if (res.status === 200) {
      sessionStorage.setItem("currentUser", JSON.stringify(res.data.user));
      sessionStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      return res.data.user;
    }
  };

  // LOGOUT
  const logout = () => {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
