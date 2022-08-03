import React from "react";
import { useContext } from "react";
import { UserContext } from "./App";
const Login = () => {
  const user = useContext(UserContext);
  const handleLogin = () => {
    user.setAuth((prev) => {
      return { ...prev, isAuthenticated: true };
    });
  };
  const handleLogout = () => {
    user.setAuth((prev) => {
      return { ...prev, isAuthenticated: false };
    });
  };
  return (
    <div>
      {user.auth.isAuthenticated ? (
        <div className="container" style={{backgroundColor: 'pink'}}>
          <h1>Welcome User</h1>
          <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="container" style={{backgroundColor: 'violet'}}>
          <h1>Click to Login</h1>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
