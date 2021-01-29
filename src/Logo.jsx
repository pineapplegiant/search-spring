import React from "react";
import logo from "./logo.svg";

function Logo(props) {
  return (
      <div className="logo logo-bg">
        <a
          href="https://searchspring.zendesk.com/hc/en-us/sections/115000119223-Search-API"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo__img" src={logo} alt="Brand Logo" />
        </a>
      </div>
  );
}

export default Logo;
