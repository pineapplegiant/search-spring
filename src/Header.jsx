import React from "react";
import logo from "./logo.svg";
import search from "./search.svg";
import shopping from "./shopping.svg";

function Header(props) {
  return (
    <header>
      {/* Logo to SearchSpring */}
      <div className="logo logo-bg">
        <a
          href="https://searchspring.zendesk.com/hc/en-us/sections/115000119223-Search-API"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo__img" src={logo} alt="Brand Logo" />
        </a>
      </div>
      {/* Search input */}
      <form className="search">
        <button className="search__submit-button" type="submit">
          <img className="search__img" src={search} alt="Search button" />
        </button>
        <input placeholder="Search for clothing" className="search__input" type="text" />
      </form>
      {/* Logo for shopping cart */}
      <div className="shopping logo-bg">
        <img className="shopping__img" src={shopping} alt="Shopping Cart" />
        <span className="shopping__count">0</span>
      </div>
    </header>
  );
}

export default Header;
