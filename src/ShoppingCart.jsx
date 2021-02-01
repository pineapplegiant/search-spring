import React from "react";
import shopping from "./shopping-cart.svg";

function ShoppingCart() {
  return (
      <div className="shopping">
        <img className="shopping__img" src={shopping} alt="Shopping Cart" />
        <span className="shopping__count">0</span>
      </div>
  );
}

export default ShoppingCart;
