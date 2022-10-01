import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AurhContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  return (
    <AuthContext.Provider value={{ cartData, setCartData }}>
      {children}
    </AuthContext.Provider>
  );
};
