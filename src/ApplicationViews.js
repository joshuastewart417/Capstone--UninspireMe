import React from "react"
import { Route } from "react-router-dom"
import {QuoteCard} from "./quotes/Quotes"
import {QuoteProvider} from "./quotes/QuoteProvider"
import {ImageProvider} from "./images/ImageProvider"
import {NounProvider} from "./nouns/NounProvider"

export const ApplicationViews= () => {
  return (
    <>
      <QuoteProvider>
        <NounProvider>
          <ImageProvider>
            <Route exact path="/">
                <QuoteCard />
            </Route>
          </ImageProvider>
        </NounProvider>  
      </QuoteProvider>
    </>
  );
}

