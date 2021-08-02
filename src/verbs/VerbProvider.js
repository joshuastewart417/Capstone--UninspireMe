import React, {useState} from "react"


/*
    The context is imported and used by individual components
    that need data
*/
export const VerbContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const VerbProvider = (props) => {
    const [verbs, setVerbs] = useState([])


    const getVerbs = () => {
        return fetch("http://localhost:8088/verbs")
            .then(res => res.json())
            .then(setVerbs)
            
    }

    const getRandomVerb = (arr) => {
        const verbIndex = Math.floor(Math.random() * arr.length)
        const randomVerb = arr[verbIndex]
        return randomVerb
      }
      



    return (
        <VerbContext.Provider value={{verbs, getVerbs, getRandomVerb}}>
            {props.children}
        </VerbContext.Provider>
    )
}