import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./Logo";
import ShoppingCart from "./ShoppingCart";
import search from "./search.svg";
//import Pagination from "./Pagination";
import Item from "./Item";
import useFetch from "./useFetch";
import Loader from "react-loader-spinner";

function App() {
  const [input, setInput] = useState(""); // Keep track of search input
  const [query, setQuery] = useState("new-arrivals"); // Last Search
  const [page, setPage] = useState(1); // Current page searching
  const [data, loading, hasError] = useFetch(query, page); // custom hook

  // Handle submit
  const handleSubmit = (event) => {
    setQuery(input);
    event.preventDefault();
  };

  return (
    <>
      <h1 className="hero-text">Search Springly Fashion</h1>
      <header>
        <Logo />
        <form onSubmit={handleSubmit} className="search">
          <button
            onClick={handleSubmit}
            className="search__submit-button"
            type="submit"
          >
            <img className="search__img" src={search} alt="Search button" />
          </button>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Search for clothing"
            className="search__input"
            type="text"
          />
        </form>
        <ShoppingCart />
      </header>

      <main className="results">
        <div className="results__response">
          {loading ? (
            <Loader
              type="Oval"
              color="#707070"
              height={100}
              width={100}
              timeout={3000}
            />
          ) : hasError ? (
            <div>An error has occurred in your request</div>
          ) : (
            data.results.map((elem) => (
              <Item
                key={elem.id}
                imageUrl={elem.imageUrl}
                description={elem.name}
                title={elem.title}
                price={elem.price}
                msrp={elem.msrp}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default App;
