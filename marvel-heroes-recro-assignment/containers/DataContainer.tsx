import React, { Fragment } from "react";
import { ErrorComponent } from "../components/ErrorComponent";
import { Loader } from "../components/Loader";

function DataContainer({ loading, error, children }) {
  if (loading) return <Loader></Loader>;

  if (error) return <ErrorComponent message={error.message}></ErrorComponent>;

  return children;
}

export { DataContainer };
