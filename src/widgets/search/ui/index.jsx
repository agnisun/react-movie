import { useContext } from "react";
import { Alert, Pagination, Spin } from "antd";

import { MoviesList } from "../../../features/movies-list";
import { InputSearch } from "../../../entities/input-search";
import { updateRating } from "../../../shared/helpers/updateRating";
import { MoviesContext } from "../../../shared/providers/context";
import "./index.css";

export function View() {
  const { moviesQuery, genresQuery, currentPage, setCurrentPage } = useContext(MoviesContext);
  const isLoading = moviesQuery.isLoading || genresQuery.isLoading;
  const errorMessage = genresQuery.error || moviesQuery.error;
  const handleOnChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  updateRating(moviesQuery.data.results);

  return (
    <section className="search">
      <div className="search__header">
        <InputSearch />
      </div>
      <div className="search__main">
        <MoviesList movies={moviesQuery.data.results} />
        {moviesQuery.data.total_results > 0 && (
          <Pagination
            style={{ alignSelf: "center" }}
            responsive
            onChange={handleOnChange}
            current={currentPage}
            pageSize={20}
            total={moviesQuery.data.total_results}
          />
        )}
      </div>
      {errorMessage ? (
        <Alert message="Error" description={errorMessage} type="error" showIcon banner />
      ) : (
        isLoading && <Spin className="spin" />
      )}
    </section>
  );
}
