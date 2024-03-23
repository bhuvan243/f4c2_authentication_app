import React from "react";

const Financial = ({ data }) => {
  // console.log(data);
  return (
    <div className="category-box">
      <h4 style={{ textAlign: "center", margin: "0 0 10px 0" }}>
        Bank Details
      </h4>
      <ul>
        <li>Card Number : {data.cardNumber}</li>
        <li>Card Expiry : {data.cardExpire}</li>
        <li>Card Type : {data.cardType}</li>
        <li>Currency : {data.currency}</li>
        <li>IBAN : {data.iban}</li>
      </ul>
    </div>
  );
};

export default Financial;
