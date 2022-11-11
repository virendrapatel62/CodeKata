import Link from "next/link";
import React from "react";
import { Hero, HeroResponse } from "../data/types/HeroReponse";

type HeroCardPropType = {
  hero: Hero;
};
const HeroCard: React.FC<HeroCardPropType> = ({ hero }) => {
  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

  return (
    <div className="">
      <img src={imageUrl} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <p
          className="card-text"
          style={{
            maxHeight: 100,
            minHeight: 100,
            overflow: "hidden",
          }}
        >
          <small>{hero.description}</small>
        </p>
        <Link href={`${hero.id}`} className="btn btn-light border">
          Show More
        </Link>
      </div>
    </div>
  );
};

export { HeroCard };
