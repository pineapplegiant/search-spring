import React from "react";
import arrow from "./arrow.svg";

function Pagination(props) {
  const results = 76;
  const pagination = "1 - 24";
  const query = "jumpsuit";

  return (
    <div className="pagination">
      <h1 className="pagination__title">
        Showing {pagination} of {results} results for "{query.toUpperCase()}"
      </h1>
      <div className="pagination__links">
        <a href="#">
          <img
            className="arrow left"
            src={arrow}
            alt="toggle previous pagination"
          />
        </a>
        <a className="pagination__link active" href="#">
          1
        </a>
        <a className="pagination__link" href="#">
          2
        </a>
        <a className="pagination__link" href="#">
          3
        </a>
        <a className="pagination__link" href="#">
          4
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
