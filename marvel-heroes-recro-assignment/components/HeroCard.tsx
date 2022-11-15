import Link from "next/link";
import React from "react";
import { Hero } from "../data/types/HeroReponse";
import classes from "../styles/HeroCard.module.css";
type HeroCardPropType = {
  hero: Hero;
};
const HeroCard: React.FC<HeroCardPropType> = ({ hero }) => {
  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

  const getDescription = () => {
    if (hero?.description) {
      return hero?.description?.substring(0, 50) + "...";
    }

    return "description not available";
  };
  return (
    <div className="">
      <img
        src={imageUrl}
        className="card-img-top img-fluid"
        alt={getDescription()}
      />
      <div className="card-body">
        <h5 className="card-title">{hero.name}</h5>
        <p className={`card-text ${classes.cardDescription}`}>
          <small>{getDescription()}</small>
        </p>
        <Link href={`${hero.id}`} className="btn btn-light border">
          Show More
        </Link>
      </div>
    </div>
  );
};

export { HeroCard };
