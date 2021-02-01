import "./App.css";
import React, { useState } from "react";
import Results from "./Results";
import useFetch from "./useFetch";
import Loader from "react-loader-spinner";
import search from "./search.svg";
import searchspring from "./searchspring.svg"
import ShoppingCart from "./ShoppingCart";

function App() {
  const [input, setInput] = useState(""); // Keep track of search input
  const [query, setQuery] = useState("new"); // Search query to submit
  const [page, setPage] = useState(1); // Current page searching
  const [data, loading, hasError] = useFetch(query, page); // Custom hook for data fetching :)
  const [isFocused, setIsFocused] = useState(false); // Track when input is focused to color the form background #a11y

  const handleSubmit = (event) => {
    setQuery(input);
    event.preventDefault();
  };

  return (
    <>
      <header>
        <img className="hero-text" src={searchspring} alt="Searchspring Logo" />
        <form
          onSubmit={handleSubmit}
          className={isFocused ? "search focused" : "search"}
        >
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
            onFocus={() => setIsFocused(!isFocused)}
            onBlur={() => setIsFocused(!isFocused)}
            type="text"
          />
        </form>
        <ShoppingCart />
      </header>
      <main className="results">
          {hasError && <div className="center-aligned">Something went wrong in your request...</div>}
        {loading ? (
          <Loader
              className="center-aligned"
              type="Oval"
              color="#707070"
              height={100}
              width={100}
              timeout={3000}
            />
          ) : (
            <Results
              data={data.results}
              paginate={data.pagination}
              page={page}
              setPage={setPage}
              query={query}
            />
          )}
      </main>
    </>
  );
}

export default App;
