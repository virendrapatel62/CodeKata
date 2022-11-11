import Head from "next/head";
import React, { Fragment } from "react";
import { Hero, HeroResponse } from "../data/types/HeroReponse";
import { HeroCard } from "./HeroCard";

type HeroListPropTypes = {
  heros: Hero[];
};

const HeroList: React.FC<HeroListPropTypes> = ({ heros }) => {
  return (
    <Fragment>
      <div className="row">
        {heros.map((hero) => (
          <div className="col-3 mx-auto card p-2 m-1" key={hero.id}>
            <HeroCard hero={hero}></HeroCard>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export { HeroList };
