import React from "react";
// import ProductListPage from '../pages/ProductListPage';
import "../styles/productListPage.css";

const Product = (props) => {
  return (
    <div className="single-product">
      <h1>{props.id}</h1>
    </div>
  );
};

export default Product;
