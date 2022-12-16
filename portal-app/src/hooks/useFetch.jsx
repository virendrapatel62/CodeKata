import { useEffect, useState } from "react";

export const useFetch = (url, defaultValue) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData);
  }, [url]);
  return data || defaultValue;
};
