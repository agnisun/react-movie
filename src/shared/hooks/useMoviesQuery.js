import { useEffect, useState } from "react";

import { headers } from "../http";

export const useMoviesQuery = (
  { searchInput, currentPage } = { searchInput: "", currentPage: 1 },
) => {
  const [data, setData] = useState({
    results: [],
    total_pages: 1,
    total_results: 0,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (!searchInput) {
      setIsLoading(false);
      setError("");
      setData({ results: [], total_pages: 1, total_results: 0 });
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchInput}&page=${currentPage}`,
      { headers },
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length === 0) setError("Movies not found");
        else
          setData({
            results: data.results,
            total_pages: data.total_pages,
            total_results: data.total_results,
          });
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [searchInput, currentPage]);

  return { data, error, isLoading };
};
