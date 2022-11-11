import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Head from "next/head";
import { Fragment, useCallback, useEffect, useState } from "react";
import { HeroList } from "../components/HeroList";
import { createURLWithQueryString, getHeros } from "../data";
import { clientApi } from "../data/axios";
import { HeroResponse } from "../data/types/HeroReponse";
import { debounce } from "lodash";
import { Loader } from "../components/Loader";
import { NoResults } from "../components/NoResults";
import { DataContainer } from "../containers/DataContainer";

const Home: React.FC<{ heroes: HeroResponse }> = (props) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [heroResponse, setHeroResponse] = useState<HeroResponse>(props.heroes);

  const heroes = heroResponse?.results || [];

  const handleOnChange = ({ target: { value } }) => {
    setInput(value);
  };

  const getData = useCallback(
    debounce((input) => {
      clientApi
        .get(
          createURLWithQueryString("/api/heroes", {
            search: input,
          })
        )
        .then((response) => {
          setHeroResponse(response.data?.heroes);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500),
    []
  );

  useEffect(() => {
    if (input) {
      setLoading(true);
      getData(input);
    }
  }, [input]);

  return (
    <Fragment>
      <Head>
        <title>{input ? "Showing Result for " + input : "Hero List"}</title>
      </Head>
      <main className="container">
        <div className="form-group mt-3">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Search
            </span>
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <DataContainer loading={loading} error={null}>
          {heroes.length ? <HeroList heros={heroes}></HeroList> : <NoResults />}
        </DataContainer>
      </main>
    </Fragment>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (contecxt) => {
  const heroes = await getHeros();
  const result: GetServerSidePropsResult<any> = {
    props: {
      heroes,
    },
  };
  return result;
};
