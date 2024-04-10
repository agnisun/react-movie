import { useContext, useState } from "react";
import "./index.css";
import { Input } from "antd";
import { debounce } from "throttle-debounce";

import { MoviesContext } from "../../../shared/providers/context";

const inputDebounce = debounce(400, (cb) => cb());

export function View() {
  const { searchInput, setSearchInput, setCurrentPage } =
    useContext(MoviesContext);
  const [input, setInput] = useState(searchInput);

  const handleOnChange = (event) => {
    setInput(event.target.value);

    const value = event.target.value.trim();

    inputDebounce(() => {
      setSearchInput(value);
      setCurrentPage(1);
    });
  };

  return (
    <div className="search__header-input">
      <Input
        placeholder="Type to search..."
        value={input}
        onChange={handleOnChange}
      />
    </div>
  );
}
