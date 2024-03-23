import React, { useState } from "react";
import "../styles/databody.scss";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Personal from "./categories/Personal";
import Official from "./categories/Official";
import Financial from "./categories/Financial";

const categoriesList = ["Personal", "Official", "Financial"];
const initialState = {
  Personal: false,
  Official: false,
  Financial: false,
};
const DataBody = ({ userData }) => {
  const [activeState, setActiveState] = useState(initialState);

  function handleClick(event) {
    const name = event.target.getAttribute("name");
    // console.log(name);
    setActiveState({ ...initialState, [name]: true });
  }
  return (
    <section className="header">
      <h4>Good evening {`${userData.firstName} ${userData.lastName}`}</h4>
      <img src={userData.image} alt={`${userData.firstName} profile image`} />
      <ul className="categories">
        {categoriesList.map((category) => {
          return (
            <li
              key={category}
              name={category}
              className={activeState[category] ? "activeCategory" : ""}
              onClick={handleClick}
            >
              {category}
            </li>
          );
        })}
      </ul>
      {activeState["Personal"] && <Personal userData={userData} />}
      {activeState["Official"] && <Official data={userData.company} />}
      {activeState["Financial"] && <Financial data={userData.bank} />}
    </section>
  );
};

export default DataBody;
