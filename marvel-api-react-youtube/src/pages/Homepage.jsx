import React, { useCallback, useEffect, useState } from "react";
import MarvelHeroList from "../components/MarvelHeroList";
import { getAllCharacters } from "../services/marvel";
import debounce from "lodash.debounce";

export default function Homepage() {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(5);

  const onLimitChange = (event) => {
    const limit = +event.target.value;
    setLimit(limit);
  };

  const debouncedFetchFunction = useCallback(
    debounce((searchQuery, limit) => {
      getAllCharacters({
        nameStartsWith: searchQuery,
        limit,
      }).then(setCharacters);
    }, 300),
    []
  );

  useEffect(() => {
    debouncedFetchFunction(searchQuery, limit);
  }, [searchQuery, limit]);

  const onSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Search
            </span>
            <input
              type="text"
              className="form-control"
              onChange={onSearchInputChange}
              value={searchQuery}
              placeholder="Search Something"
            />
          </div>
        </div>

        <div className="col-4">
          <input
            type="number"
            min={5}
            max={50}
            className="form-control"
            onChange={onLimitChange}
            value={limit}
          />
        </div>
      </div>

      <MarvelHeroList characters={characters} />
    </div>
  );
}
