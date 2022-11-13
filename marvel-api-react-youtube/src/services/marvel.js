import { characterResponseMapper } from "../utils/mappers";
import { api } from "./axios";
import md5 from "md5";

// GET /v1/public/characters

// !DO NOT STORE KEYS HERE
// !WE ARE DOING IT FOR TEMP PERPOSE
// 1fb04c87bbc7b2659f673ecc27df9f032b1d61e685f71c1b7b40437bd1ddb2e7c215d75e0
// hash : 3c736c44130d090089d66c89128b9739

const TS = 1;
const API_PUBLIC_KEY = "YOUR KEY";
const API_PRIVATE_KEY = "YOUR KEY";

const HASH = md5(`${TS}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`);

const URLS = {
  GET_ALL_CHARACTERS: "/v1/public/characters",
};

export const getAllCharacters = (query) => {
  const nameStartsWith = query?.nameStartsWith;
  const limit = query?.limit;
  let url = `${URLS.GET_ALL_CHARACTERS}?apikey=${API_PUBLIC_KEY}&ts=${TS}&hash=${HASH}`;

  if (nameStartsWith) {
    url += `&nameStartsWith=${nameStartsWith}`;
  }
  if (limit > 0) {
    url += `&limit=${limit}`;
  }

  return api
    .get(url)
    .then((response) => response?.data?.data)
    .then((data) => data?.results || [])
    .then(characterResponseMapper);
};
