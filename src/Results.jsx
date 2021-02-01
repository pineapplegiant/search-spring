import React from "react";
import Pagination from "./Pagination.jsx";
import Item from "./Item.jsx";

function Results(props) {
  if (!props.data || props.data.length === 0) {
    return <div className="center-aligned">Results not found for '{props.query}'</div>;
  } else {
    return (
      <>
        <Pagination
          paginate={props.paginate}
          page={props.page}
          changePage={props.setPage}
          query={props.query}
        />
        <div className="results__response">
        {props.data.map((result) => (
          <Item
            key={result.id}
            imageUrl={result.imageUrl}
            description={result.name}
            title={result.title}
            price={result.price}
            msrp={result.msrp}
          />
        ))}
        </div>
        <Pagination
          paginate={props.paginate}
          page={props.page}
          changePage={props.setPage}
          query={props.query}
        />
      </>
    );
  }
}

export default Results;
