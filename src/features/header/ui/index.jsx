import "./index.css";
import { InputSearch } from "../../../entities/input-search";

export function View({
  setPageMode,
  pageMode,
  setSearchInput,
  setCurrentPage,
}) {
  const handlePageMode = (pageMode) => () => setPageMode(pageMode);

  return (
    <header className="header">
      <div className="header__mode">
        <button
          onClick={handlePageMode("search")}
          className={`header__button ${pageMode === "search" ? "active" : ""}`}
        >
          Search
        </button>
        <button
          onClick={handlePageMode("rated")}
          className={`header__button ${pageMode === "rated" ? "active" : ""}`}
        >
          Rated
        </button>
      </div>
      <InputSearch
        setCurrentPage={setCurrentPage}
        setSearchInput={setSearchInput}
      />
    </header>
  );
}
