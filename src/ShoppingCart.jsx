import React from "react";
import shopping from "./shopping.svg";

function ShoppingCart(props) {
  return (
      <div className="shopping logo-bg">
        <img className="shopping__img" src={shopping} alt="Shopping Cart" />
        <span className="shopping__count">0</span>
      </div>
  );
}

export default ShoppingCart;
