import { createHash } from "crypto";

const { PUBLIC_KEY, PRIVATE_KEY, TIMESTAMP } = process.env;

const getHash = () => {
  return createHash("md5")
    .update(`${TIMESTAMP}${PRIVATE_KEY}${PUBLIC_KEY}`)
    .digest("hex");
};

const defaultQuerySringObject = {
  apikey: PUBLIC_KEY,
  ts: TIMESTAMP,
  hash: getHash(),
};

export const createURLWithQueryString = (
  url,
  data = {},
  addDefaultQuery: boolean = false
) => {
  return `${url}?${new URLSearchParams({
    ...data,
    ...(addDefaultQuery ? defaultQuerySringObject : {}),
  }).toString()}`;
};
