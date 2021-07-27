import React from "react";
import {Route} from "react-router-dom"
import { QuoteCard } from "./quotes/Quotes";

export const ApplicationViews= () => {
  return (
    <>

        <QuoteCard />

    </>
  );
}

export default ApplicationViews;