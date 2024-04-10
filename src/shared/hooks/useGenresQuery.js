import { useEffect, useState } from "react";

import { headers } from "../http";

export const useGenresQuery = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://api.themoviedb.org/3/genre/movie/list", { headers })
      .then((response) => response.json())
      .then((data) => {
        setData(data.genres);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};
