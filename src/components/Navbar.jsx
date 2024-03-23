import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = ({userData}) => {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("accessCredentials");
    navigate("/login");
  }
  return (
    <nav className="navbar">
      <cite>Welcome {userData.firstName}!</cite>
      <div  className="logout-div" onClick={handleLogout}>
        Logout
        <span className="material-icons">
          logout
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
