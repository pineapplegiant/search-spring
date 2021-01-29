import React from "react";
import arrow from "./arrow.svg";

function Pagination(props) {
  return (
    <div className="pagination">
      <h1 className="pagination__title">
        Showing {props.begin}-{props.end} of {props.totalResults} results for "{props.query.toUpperCase()}"
      </h1>
      <div className="pagination__links">
        <a href="#">
          <img
            className="arrow left"
            src={arrow}
            alt="toggle previous pagination"
          />
        </a>
        <a href="#">
          <img
            className="arrow right"
            src={arrow}
            alt="toggle previous pagination"
          />
        </a>
      </div>
    </div>
  );
}

export default Pagination;
