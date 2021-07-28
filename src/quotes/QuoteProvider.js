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
    const [quote, setQuote] = useState({})



    const getQuote = (id) => {
        return fetch(`http://localhost:8088/quotes/${id}`)
            .then(res => res.json())
            .then(setQuote)
    }


    return (
        <QuoteContext.Provider value={{
            quote, getQuote, setQuote
        }}>
            {props.children}
        </QuoteContext.Provider>
    )
}