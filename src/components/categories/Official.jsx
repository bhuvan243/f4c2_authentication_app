import React from "react";

const Official = ({ data }) => {
  // console.log(data);
  return (
    <div className="category-box">
      <ul>
        <li>Job Title : {data.title}</li>
        <li>Department : {data.department}</li>
        <li>Company Name : {data.name}</li>
        <li>
          {`Company Address: ${data.address.address}, ${data.address.city}`}
        </li>
      </ul>
    </div>
  );
};

export default Official;
