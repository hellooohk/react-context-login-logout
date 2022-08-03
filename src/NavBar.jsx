import React,{useContext} from "react";
import { UserContext } from "./App";
const NavBar = () => {
  const user = useContext(UserContext);
  return(
    <div className="NavBar">
        {user.auth.isAuthenticated ? <div>Hi User</div> : <div>Login</div>}
    </div>
  );
};

export default NavBar;
