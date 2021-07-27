import React, {useState} from "react";
import nlp from "compromise"
import {quoteData} from "../Data.js"
import {nounData} from "../Data.js"

const nounList = (nounData)[0];
let doc = ""

const filterNoun = (arr) => {
    const getRandomNoun = Math.floor(Math.random() * arr.length)
    const randomNoun = arr[getRandomNoun]
    return randomNoun
}

const replaceNoun = () => {
nlp(doc).replaceWith(filterNoun(nounList), {keepTags:true}).text()
console.log(doc)
return doc.text()
}

export const QuoteCard = ({ body, author }) => {
    doc = nlp(`${body}`).nouns().out('array')
    console.log(doc)
  if (!body) return <div />;
  return (
        <div>
            {quoteData.find((body, author))}
          <div>
            <h5>{body}</h5>
          </div>
          <div>
            <h5>{author}</h5>
          </div>
          <button onClick={replaceNoun}>Uninspire Me</button>
        </div>
  );
};

