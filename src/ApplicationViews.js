import React from "react"
import { Route } from "react-router-dom"
import {QuoteCard} from "./quotes/Quotes"
import {QuoteProvider} from "./quotes/QuoteProvider"

export const ApplicationViews= () => {
  return (
    <>
      <QuoteProvider>
        <Route exact path="/">
            <QuoteCard />
        </Route>
      </QuoteProvider>
    </>
  );
}

