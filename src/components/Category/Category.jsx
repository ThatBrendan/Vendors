import React from "react";
import "./Category.css";
import { categoryList } from "../../assets/assets";

const Category = ({ category, setCategory }) => {
  return (
    <div className="category-menu" id="category">
      <h2>Explore Categories</h2>
      <p className="large">Browse our vast range of vendors. </p>
      <div className="category-list">
        {categoryList.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.category_name ? "All" : item.category_name
                )
              }
              key={index}
              className="category-list-item"
            >
              <img
                className={category === item.category_name ? "active" : ""}
                src={item.category_image}
                alt=""
              />
              <p className="large green-text boldFont">{item.category_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
