import React from "react";
import arrow from "./arrow.svg";

function Pagination({paginate, page, changePage, query}) {

  // Create array of paginated numbers
  const paginatedNumbers = () => {
    let nums = [];
    for (let i = 1; i <= paginate.totalPages; i++) {
      nums.push(
        <a
          key={i}
          href="!#"
          onClick={() => changePage(i)}
          className={i === page ? "active pagination__link" : "pagination__link"}
        >
          {i}
        </a>
      );
    }
      return nums;
  };

  return (
    <div className="pagination">
      <h1 className="pagination__title">
        {`Showing ${paginate.begin}-${paginate.end} of ${paginate.totalResults} results for '${query}'`}
      </h1>
      <div className="pagination__links">
        <a
          href="!#"
          onClick={() => changePage((page) => page - 1)}
          className={page === 1 ? "disabled" : ""}
        >
          <img
            className="arrow left"
            src={arrow}
            alt="toggle previous pagination"
          />
        </a>
        {paginatedNumbers()}
        <a
          href="!#"
          onClick={() => changePage((page) => page + 1)}
          disabled={page === paginate.totalPages}
          className={page === paginate.totalPages ? "disabled" : ""}
        >
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
