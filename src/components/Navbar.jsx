import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.scss";
import { Global } from "../App";

const Navbar = ({ userData }) => {
  const { theme, setTheme } = useContext(Global);
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("accessCredentials");
    navigate("/login");
  }
  function switchTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <nav className={theme === "dark" ? "navbar dark" : "navbar light"}>
      <cite>Welcome {userData.firstName}!</cite>
      <div className="nav-right">
        <span className="material-icons" onClick={switchTheme}>
          light_mode
        </span>
        <div className="logout-div" onClick={handleLogout}>
          Logout
          <span className="material-icons">logout</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
