import { Movie } from "../../../entities/movie";
import "./index.css";

export function View({ movies }) {
  return (
    <ul className="main-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
