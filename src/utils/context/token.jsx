import {
    createContext,
    useState,
    useMemo,
    useContext,
    useCallback,
  } from "react";
  
  const contextValue = {
    token: "",
    role: "",
    changeToken: () => {},
    changeRole: () => {},
  };
  
  const TokenContext = createContext(contextValue);
  
  function TokenProvider({ children }) {
    const initialValue = localStorage.getItem("user") ?? "";
    const [token, setToken] = useState(initialValue);
    const initialValueRole = localStorage.getItem("admin") ?? "";
    const [role, setRole] = useState(initialValueRole);
  
    const changeToken = useCallback(
      (data) => {
        const newData = data ?? "";
        if (data) {
          localStorage.setItem("user", newData);
        }else {
            localStorage.removeItem("user");
        }
        setToken(newData);
      },
      [token]
    );

    const changeRole = useCallback(
      (data) => {
        const newData = data ?? "";
        if (data) {
          localStorage.setItem("admin", newData);
        }else {
            localStorage.removeItem("admin");
        }
        setRole(newData);
      },
      [role]
    );
  
    const tokenContextValue = useMemo(
      () => ({
        token,
        role,
        changeToken,
        changeRole,
      }),
      [token, role]
    );
  
    return (
      <TokenContext.Provider value={tokenContextValue}>
        {children}
      </TokenContext.Provider>
    );
  }
  
  function useToken() {
    const tokenContext = useContext(TokenContext);
  
    if (tokenContext === undefined) {
      console.log("ERROR, useToken must be used within TokenContext");
    }
  
    return tokenContext;
  }
  
  export { TokenProvider, useToken };