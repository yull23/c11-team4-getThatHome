import { useLoaderData } from "react-router-dom";
import ViewProperty from "../components/ViewProperty/ViewProperty";
import React from "react";

export const ShowPropertyContext = React.createContext(null);

function ShowPropertyPage() {
  const property = useLoaderData();
  return (
    <ShowPropertyContext.Provider value={{ property }}>
      <ViewProperty />
    </ShowPropertyContext.Provider>
  );
}

export default ShowPropertyPage;
