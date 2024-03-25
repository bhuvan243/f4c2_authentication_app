import React, { useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import NotFound from "./components/NotFound";

export const Global = createContext();
function App() {
  const [theme, setTheme] = useState("dark");
  const [userData, setUserData] = useState({});
  const initialValue = {
    theme: theme,
    setTheme: setTheme,
    userData: userData,
    setUserData: setUserData,
  };
  
  return (
    <Global.Provider value={initialValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/:userid" Component={ProfilePage} />
          <Route path="/error" Component={NotFound} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
      {/* <LoginPage /> */}
    </Global.Provider>
  );
}

export default App;
