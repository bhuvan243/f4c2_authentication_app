import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/loginPage.scss";

const initialValue = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const [inputs, setInputs] = useState(initialValue);
  const [responseStatus, setResponseStatus] = useState(null);
  const navigate = useNavigate();
  document.title = "Login";
  //   console.log("Hi");
  function handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setResponseStatus(null);
    setInputs({ ...inputs, [name]: value });
  }
  function handleSubmission(event) {
    event.preventDefault();
    (async () => {
      try {
        const response = await axios.post(
          "https://dummyjson.com/auth/login",
          {
            username: inputs.username,
            password: inputs.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const accessCredentials = {
          id: response.data.id,
          token: response.data.token,
        };
        localStorage.setItem(
          "accessCredentials",
          JSON.stringify(accessCredentials)
        );
        navigate(`/${response.data.username}`);
      } catch (error) {
        setResponseStatus(error.response.data.message);
      }
    })();
  }

  return (
    <div className="box">
      <form onChange={handleFormChange} onSubmit={handleSubmission}>
        <h2>Login Here</h2>

        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="text"
            id="username"
            name="username"
            placeholder=""
            // autoComplete="off"
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" id="password" name="password" placeholder="" />
          <label htmlFor="password">Password</label>
        </div>

        <button type="submit">Login</button>
        {responseStatus && <p className="responseMessage">{responseStatus}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
