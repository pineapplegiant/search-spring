import { useState, useEffect } from "react";

function useFetch(query, page) {
  const [data, setData] = useState({}); // API data
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      await fetch(
        `http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${query}&resultsFormat=native&page=${page}`
      )
        .then((response) => response.json())
        .then((recievedData) => {
          setData(recievedData);
          setLoading(false);
        })
        .catch((err) => {
          setHasError(true);
          console.log("lol u messed up:", err);
        });
    };
    fetchResults();

    // Re-run everytime query or page is changed :')
  }, [query, page]);

  return [data, loading, hasError];
}

export default useFetch;
