import { useState } from "react";
import { Alert, Pagination, Spin } from "antd";

import { MoviesList } from "../../../features/movies-list";
import { useRatedMoviesQuery } from "../../../shared/hooks";
import { updateRating } from "../../../shared/helpers/updateRating";

export function View() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useRatedMoviesQuery({ currentPage });

  const handleOnChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  updateRating(data.results);

  return (
    <div className="search__main">
      <MoviesList movies={data.results} />
      {data.total_results > 0 && (
        <Pagination
          style={{ alignSelf: "center" }}
          responsive
          onChange={handleOnChange}
          current={currentPage}
          pageSize={20}
          total={data.total_results}
        />
      )}
      {error && <Alert message="Error" description={error} type="error" showIcon banner />}
      {isLoading && !error && <Spin className="spin" />}
    </div>
  );
}
