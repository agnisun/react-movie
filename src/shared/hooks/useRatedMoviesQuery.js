import { useEffect, useState } from "react";

import { headers } from "../http";

export const useRatedMoviesQuery = ({ currentPage } = { currentPage: 1 }) => {
  const [data, setData] = useState({
    results: [],
    total_pages: 1,
    total_results: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://api.themoviedb.org/3/guest_session/${sessionStorage.getItem("session_id")}/rated/movies?api_key=${import.meta.env.VITE_API_KEY}&page=${currentPage}`,
      { headers },
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.results.length)
          setData({
            results: data.results,
            total_pages: data.total_pages,
            total_results: data.total_results,
          });
        else setData({ results: [], total_pages: 1, total_results: 0 });
      })
      .catch(() => setData({ results: [], total_pages: 1, total_results: 0 }))
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  return { data, error: "", isLoading };
};
