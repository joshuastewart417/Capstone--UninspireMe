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

    const getRandomNoun = (arr) => {
        const nounIndex = Math.floor(Math.random() * arr.length)
        const randomNoun = arr[nounIndex]
        return randomNoun
      }
      



    return (
        <NounContext.Provider value={{nouns, getNouns, getRandomNoun}}>
            {props.children}
        </NounContext.Provider>
    )
}