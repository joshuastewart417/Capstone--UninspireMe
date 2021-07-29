import React, {useState} from "react"


/*
    The context is imported and used by individual components
    that need data
*/
export const NounContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NounProvider = (props) => {
    const [nouns, setNouns] = useState([])


    const getNouns = () => {
        return fetch("http://localhost:8088/nouns")
            .then(res => res.json())
            .then(setNouns)
            
    }




    const filterNoun = (arr) => {
        const getRandomNoun = Math.floor(Math.random() * arr.length)
        const randomNoun = arr[getRandomNoun]
        return randomNoun
    }

    const replaceNoun = () => {
    // nlp(doc).replaceWith(filterNoun(nounList), {keepTags:true}).text()
    // console.log(doc)
    // return doc.text()
    }

    return (
        <NounContext.Provider value={{nouns, getNouns, filterNoun, replaceNoun}}>
            {props.children}
        </NounContext.Provider>
    )
}