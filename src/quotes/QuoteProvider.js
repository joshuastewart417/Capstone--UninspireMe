import React, { useState } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const QuoteContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const QuoteProvider = (props) => {
    const [quotes, setQuote] = useState([])

    

    const getQuote = () => {
        return fetch("http://localhost:8088/quotes")
            .then(res => res.json())
            .then(setQuote)
    }

    return (
        <QuoteContext.Provider value={{
            quotes, getQuote, setQuote
        }}>
            {props.children}
        </QuoteContext.Provider>
    )
}