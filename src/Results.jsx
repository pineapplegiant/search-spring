import React from "react";
import Pagination from "./Pagination.jsx";
import Item from "./Item.jsx"

function Results(props) {
  //response

  return (
    <main className="results">
      <Pagination />
        <div className="results__response">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        </div>
        <Pagination />
    </main>
  );
}

export default Results;
