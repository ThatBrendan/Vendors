import React from "react";
import "./VendorList.css";

const VendorList = ({ id, name, image, price, category }) => {
  return (
    <div>
      <div className="vendor-item">
        <div className="vendor-img-container">
          <img className="vendor-img" src={image} alt="" />
        </div>
        <div className="vendor-info">
          <p className="large boldFont">{name}</p>
          <p className="yellow-text boldFont">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default VendorList;
