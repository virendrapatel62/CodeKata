import { createHash } from "crypto";
import { api } from "./axios";
import { HeroResponse } from "./types/HeroReponse";

const URLS = {
  GET_CHARACTERS: "/v1/public/characters",
};

const ts = 1;
const { PUBLIC_KEY, PRIVATE_KEY } = process.env;

export const createURLWithQueryString = (url, data = {}) => {
  return `${url}?${new URLSearchParams(data).toString()}`;
};

const getHash = () => {
  return createHash("md5")
    .update(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
    .digest("hex");
};

export const getHeros = (searchQuery?: String) => {
  return api
    .get<{
      data: HeroResponse;
    }>(
      createURLWithQueryString(URLS.GET_CHARACTERS, {
        apikey: PUBLIC_KEY,
        ts,
        hash: getHash(),
        limit: 30,
        ...(searchQuery ? { nameStartsWith: searchQuery } : {}),
      })
    )
    .then((response) => response.data.data)
    .then((heroes) => {
      return heroes;
    });
};
