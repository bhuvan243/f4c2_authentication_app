import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Global } from "../App";
import "../styles/profilePage.scss";
import Navbar from "./Navbar";
import Header from "./DataBody";


const ProfilePage = () => {
  const { theme, setTheme, userData, setUserData } = useContext(Global);
  const { id } = JSON.parse(localStorage.getItem("accessCredentials"));
  const params = useParams();
  const navigate = useNavigate();
  // console.log(params.userid);
  if (params.userid !== userData.username) {
    navigate("/error");
  }
  // console.log(userData.username);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main>
      <Navbar userData={userData}/>
      <Header userData={userData}/>
    </main>
  );
};

export default ProfilePage;
