import React, {useContext, useEffect} from "react";
import nlp from "compromise"
import {nounData} from "../Data.js"
import {QuoteContext} from "./QuoteProvider"


// const nounList = (nounData)[0];



// const filterNoun = (arr) => {
//     const getRandomNoun = Math.floor(Math.random() * arr.length)
//     const randomNoun = arr[getRandomNoun]
//     return randomNoun
// }

// const replaceNoun = () => {
// nlp(doc).replaceWith(filterNoun(nounList), {keepTags:true}).text()
// console.log(doc)
// return doc.text()
// }

export const QuoteCard = () => {

  const {quote, setQuote, getQuote} = useContext(QuoteContext)

  const tagQuote = () => {
    nlp({quote}).nouns().out('array')
  }

  useEffect(() => {
    const randomQuoteId = Math.floor(Math.random() * 30)
    // const quoteId = parseInt(props.match.params.quoteId)
    getQuote(randomQuoteId)
  }, [])

  // let doc = nlp({quote}).nouns().out('array')
  // console.log(doc)

//TODO : replace getQuote with getQuotebyID function
    return (
        <div>
            <h3 className="quote__header">Quote</h3>
          <div>
            <h5>{quote.quote}</h5>
          </div>
          <div>
            <h5>{quote.author}</h5>
          </div>
          <button>Uninspire Me</button>
        </div>
      
  );
};
