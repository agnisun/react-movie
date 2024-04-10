import { useState } from "react";

export function MovieRating({ movie }) {
  const [rating, setRating] = useState(movie.rating);

  const handleOnClick = (i) => () => {
    const newRating = 10 - i;
    setRating(newRating);
    movie.rating = newRating;
    const ratedMovies = JSON.parse(sessionStorage.getItem("ratedMovies") || JSON.stringify({}));

    ratedMovies[movie.id] = newRating;

    sessionStorage.setItem("ratedMovies", JSON.stringify(ratedMovies));

    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/rating?guest_session_id=${sessionStorage.getItem("session_id")}&api_key=${import.meta.env.VITE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=utf-8",
          accept: "application/json",
        },
        body: JSON.stringify({
          value: 10 - i,
        }),
      }
    );
  };

  return (
    <div className="movie-list__item-rating">
      <div className="movie-list__item-rating__list">
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <button
              onClick={handleOnClick(i)}
              key={i}
              className={`movie-list__item-rating__star ${10 - i <= rating ? "movie-list__item-rating__star--active" : ""}`}
            >
              ★
            </button>
          );
        })}
      </div>
    </div>
  );
}
