export function MovieScore({ avg }) {
  return (
    <div
      className={`movie-list__item-score ${avg < 4 ? "movie-list__item-score--red" : avg < 6 ? "movie-list__item-score--orange" : avg < 8 ? "movie-list__item-score--yellow" : "movie-list__item-score--green"}`}
    >
      {Math.round(avg * 10) / 10}
    </div>
  );
}
