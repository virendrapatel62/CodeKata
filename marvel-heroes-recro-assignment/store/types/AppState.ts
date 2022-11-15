import { Hero } from "../../data/types/HeroReponse";

export type MarvelAppState = {
  count: number;
  offset: number;
  limit: number;
  results: Hero[];
};

export type AppState = {
  marvels: MarvelAppState;
};
