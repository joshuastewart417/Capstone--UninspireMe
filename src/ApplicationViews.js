import React from "react"
import { Route } from "react-router-dom"
import {QuoteCard} from "./quotes/Quotes"
import {QuoteProvider} from "./quotes/QuoteProvider"
import {ImageProvider} from "./images/ImageProvider"
import {NounProvider} from "./nouns/NounProvider"
import {VerbProvider} from "./verbs/VerbProvider"

export const ApplicationViews= () => {
  return (
    <>
      <QuoteProvider>
        <VerbProvider>
          <NounProvider>
            <ImageProvider>
              <Route exact path="/">
                  <QuoteCard />
              </Route>
            </ImageProvider>
          </NounProvider>  
        </VerbProvider>
      </QuoteProvider>
    </>
  );
}

