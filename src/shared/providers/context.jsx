import { createContext, useState } from "react";

import { useGenresQuery, useMoviesQuery, useRatedMoviesQuery } from "../hooks";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ratedCurrentPage, setRatedCurrentPage] = useState(2);
  const genresQuery = useGenresQuery();
  const moviesQuery = useMoviesQuery({ searchInput, currentPage });
  const ratedMoviesQuery = useRatedMoviesQuery({
    currentPage: ratedCurrentPage,
  });

  return (
    <MoviesContext.Provider
      value={{
        genresQuery,
        moviesQuery,
        ratedMoviesQuery,
        searchInput,
        setSearchInput,
        currentPage,
        setCurrentPage,
        ratedCurrentPage,
        setRatedCurrentPage,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
