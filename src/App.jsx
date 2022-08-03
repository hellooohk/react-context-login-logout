import React, { useState } from "react";
import { createContext } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
export const UserContext = createContext();
const App = () => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    username: "",
  });
  const value = { auth, setAuth };
  return (
    <div className="my-4">
      <UserContext.Provider value={value}>
        <NavBar />
        <Login />
      </UserContext.Provider>
    </div>
  );
};

export default App;
