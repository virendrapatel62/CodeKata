import React, { Fragment } from "react";
import MarvelHeroCard from "./MarvelHeroCard";

export default function MarvelHeroList({ characters }) {
  return (
    <Fragment>
      <div className="row">
        {characters.map((character, index) => (
          <div className="col-3">
            <div className="p-3 card mt-2">
              <MarvelHeroCard key={index} character={character} />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
