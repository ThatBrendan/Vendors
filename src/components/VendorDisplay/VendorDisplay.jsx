import React, { useContext } from "react";
import "./VendorDisplay.css";
import { StoreContext } from "../../StoreContext/StoreContext";
import VendorList from "../VendorList/VendorList";

const VendorDisplay = ({ category }) => {
  const { vendor_list } = useContext(StoreContext);
  return (
    <div className="vendor-display" id="vendor-display">
      <h3>Vendors List</h3>
      <div className="vendor-display-list">
        {vendor_list.map((item, index) => {
          return (
            <VendorList
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VendorDisplay;
