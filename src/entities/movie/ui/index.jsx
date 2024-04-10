import { useContext } from "react";
import { format } from "date-fns";

import noImagePng from "../../../shared/images/no-image.png";
import { MoviesContext } from "../../../shared/providers/context";

import { MovieGenre } from "./movie-genre";
import { MovieRating } from "./movie-rating";
import { MovieScore } from "./movie-score";
import "./index.css";

export function View({ movie }) {
  const { genresQuery } = useContext(MoviesContext);

  const handleOnImageError = (event) => {
    event.target.src = noImagePng;
  };

  return (
    <li>
      <article className="movie-list__item">
        <div className="movie-list__item-img">
          <img
            onError={handleOnImageError}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </div>
        <header className="movie-list__item-header">
          <h2 className="movie-list__item-title">{movie.title}</h2>
          {movie.release_date && (
            <span className="movie-list__item-release">
              {format(movie.release_date, "PP")}
            </span>
          )}
          <div className="movie-list__item-genres">
            {movie.genre_ids.map((id) => (
              <MovieGenre
                key={id}
                genre={
                  genresQuery.data.find((genre) => genre.id === id)?.name ||
                  "unknown"
                }
              />
            ))}
          </div>
          <MovieScore avg={movie.vote_average} />
        </header>
        <section className="movie-list__item-info">
          <p className="movie-list__item-info__text">
            {movie.overview
              ? movie.overview.length > 247
                ? movie.overview.slice(0, 244).trimEnd() + "..."
                : movie.overview
              : "No overview"}
          </p>
          <MovieRating movie={movie} />
        </section>
      </article>
    </li>
  );
}
