import React from "react";

const Personal = ({ userData, theme }) => {
  return (
    <div className={theme === "light" ? "category-box category-light" : "category-box category-dark"}>
      <ul>
        <li>Name : {`${userData.firstName} ${userData.lastName}`}</li>
        <li>Age : {userData.age} years old</li>
        <li>Gender : {userData.gender}</li>
        <li>Email : {userData.email}</li>
        <li>Phone : {userData.phone}</li>
        <li>DOB : {userData.birthDate}</li>
        <li>
          Address :
          <ul className="address-container">
            <li>{userData.address.address}</li>
            <li>{userData.address.city}</li>
            <li>{userData.address.state}</li>
            <li>Postal Code : {userData.address.postalCode}</li>
          </ul>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Personal;
