import { createHash } from "crypto";
import { api } from "./axios";
import { HeroResponse } from "./types/HeroReponse";
import { createURLWithQueryString } from "./utils";

const URLS = {
  GET_CHARACTERS: "/v1/public/characters",
};

export const getHeros = (searchQuery?: String) => {
  return api
    .get<{
      data: HeroResponse;
    }>(
      createURLWithQueryString(
        URLS.GET_CHARACTERS,
        {
          limit: 30,
          ...(searchQuery ? { nameStartsWith: searchQuery } : {}),
        },
        true
      )
    )
    .then((response) => response.data.data)
    .then((heroes) => {
      return heroes;
    });
};
