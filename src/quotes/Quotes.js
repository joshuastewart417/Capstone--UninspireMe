import React, {useContext, useEffect, useState} from "react";
import nlp from "compromise"
import {QuoteContext} from "./QuoteProvider"
import {ImageContext} from "../images/ImageProvider"
import {NounContext} from "../nouns/NounProvider"
import {VerbContext} from "../verbs/VerbProvider"
import "./Quotes.css"


export const QuoteCard = () => {

  const {quote, setQuote, getQuote} = useContext(QuoteContext)
  const {images, setImage, getImages} = useContext(ImageContext)
  const {nouns, getNouns, filterNoun, getRandomNoun} = useContext(NounContext)
  const {verbs, getVerbs, getRandomVerb} = useContext(VerbContext)
  const [nounTags, setNounTags] = useState([])
  const [verbTags, setVerbTags] = useState([])


  useEffect(() => {
    const getRandomQuoteId = Math.floor(Math.random() * 30) + 1
    getQuote(getRandomQuoteId)
    getNouns()
    getVerbs()
    getImages()
       
  }, [])
  
  useEffect(() => {
    const nounTags = nlp(quote.quote).nouns().out('array')
    setNounTags(nounTags)
    console.log(nounTags)
  }, [quote])

  useEffect(() => {
    const verbTags = nlp(quote.quote).verbs().out('array')
    setVerbTags(verbTags)
    console.log(verbTags)
  }, [quote])

  const handleButtonClick = () => {
    let doc = nlp(quote.quote)
    nounTags.forEach((nTag) => {
       doc.match(nTag).replaceWith(getRandomNoun(nouns), {keepTags: true}).text()
    verbTags.forEach((vTag) => {
       doc.match(vTag).replaceWith(getRandomVerb(verbs), {keepTags: true}).text()
    })
     console.log(doc.text())

    })
  }

    return (
      
      <div className="flex_container">
        <div className="gradient-border" id="box">
          <div className="curation_container"> 
              <h5 className="quote">{quote.quote}</h5>
              <h5 className="author">{quote.author}</h5>
              <img className="img" src={images.url} />
              <button className="uninspirebutton" onClick={handleButtonClick}>Uninspire Me</button>
          </div>
        </div>
      </div>
  );
};
