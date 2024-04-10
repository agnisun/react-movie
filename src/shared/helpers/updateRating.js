export function updateRating(movies) {
  const ratedMovies = JSON.parse(sessionStorage.getItem("ratedMovies") || JSON.stringify({}));

  movies.forEach((movie) => {
    const rating = ratedMovies[movie.id];

    if (typeof rating === "number") {
      movie.rating = rating;
    }

    return movie;
  });
}
