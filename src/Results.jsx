import React from "react";
import Pagination from "./Pagination.jsx";
import Item from "./Item.jsx"

function Results(props) {

  return (
    <main className="results">
      <Pagination pagination={props.pagination} />
        <div className="results__response">
          <Item
            title={props.result.title}
            price={props.result.price}
            msrp={props.result.msrp}
            imgURL={props.result.imageURL}
          />
        <Item />
        </div>
        <Pagination props={props.pagination} />
    </main>
  );
}

export default Results;
