import React, { useState, useContext } from "react";
import "../styles/databody.scss";
import Personal from "./categories/Personal";
import Official from "./categories/Official";
import Financial from "./categories/Financial";
import { Global } from "../App";

const categoriesList = ["Personal", "Official", "Financial"];
const initialState = {
  Personal: false,
  Official: false,
  Financial: false,
};
const DataBody = ({ userData }) => {
  const [activeState, setActiveState] = useState(initialState);
  const {theme} = useContext(Global);

  function handleClick(event) {
    const name = event.target.getAttribute("name");
    // console.log(name);
    setActiveState({ ...initialState, [name]: true });
  }
  return (
    <section className={theme === "dark" ? "header dark-body" : "header light-body"}>
      <h4>Good evening {`${userData.firstName} ${userData.lastName}`}</h4>
      <img src={userData.image} alt={`${userData.firstName} profile image`} 
        className={theme === "dark" ? "img-dark" : "img-light"}
      />
      <ul className={theme === "dark" ? "categories" : "categories cat-light"}>
        {categoriesList.map((category) => {
          return (
            <li
              key={category}
              name={category}
              className={activeState[category] ? (theme === "dark" ? "active-dark" : "active-light") : ""}
              onClick={handleClick}
            >
              {category}
            </li>
          );
        })}
      </ul>
      {activeState["Personal"] && <Personal userData={userData} theme={theme}/>}
      {activeState["Official"] && <Official data={userData.company} theme={theme}/>}
      {activeState["Financial"] && <Financial data={userData.bank} theme={theme}/>}
    </section>
  );
};

export default DataBody;

