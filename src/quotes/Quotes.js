import React, {useContext, useEffect, useState} from "react";
import nlp from "compromise"
import {QuoteContext} from "./QuoteProvider"
import {ImageContext} from "../images/ImageProvider"
import {NounContext} from "../nouns/NounProvider"



export const QuoteCard = () => {

  const {quote, setQuote, getQuote} = useContext(QuoteContext)
  const {images, setImage, getImages} = useContext(ImageContext)
  const {nouns, getNouns} = useContext(NounContext)
  const [nounTags, setNounTags] = useState([])


  useEffect(() => {
    const randomQuoteId = Math.floor(Math.random() * 30) + 1
    // const quoteId = parseInt(props.match.params.quoteId)
    getQuote(randomQuoteId)
    getNouns()
    // var len = imageArray.length
    // for(var i=1; i < len; i++) {
    //   var imageId = imageArray[i]
    // }
    // getImages(imageId)

    // .then(() => {
    //   Object.keys()
    //   console.log()
    //   return nlp().nouns().out('array')
    // })
    
  }, [])
  
  useEffect(() => {
    const tagArray = nlp(quote.quote).nouns().out('array')
    setNounTags(tagArray)
    console.log(tagArray)
  }, [quote])

  // const filterNoun = (arr) => {
  //   const getRandomNoun = Math.floor(Math.random() * arr.length)
  //   const randomNoun = arr[getRandomNoun]
  //   return randomNoun
  // }

  // const replaceNoun = () => {
  //   nlp(doc).replaceWith(filterNoun(nounList), {keepTags:true}).text()
  //   console.log(doc)
  //   return doc.text()
  // }

  const handleButtonClick = () => {
    // const newNouns = nounTags.map((tag) => {
      
    // })
    console.log(nounTags, nouns)
  }

    return (
      

        <div>
            <h3 className="quote__header">Quote</h3>
          <div>
            <h5>{quote.quote}</h5>
          </div>
          <div>
            <h5>{quote.author}</h5>
          </div>
          <img className="img_container" src={images.url} />
          <button onClick={handleButtonClick}>Uninspire Me</button>
        </div>
      
  );
};
