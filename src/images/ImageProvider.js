import React, {useState} from "react"



export const ImageContext = React.createContext()


export const ImageProvider = (props) => {
    const [images, setImage] = useState({})


    const getImages = (id) => {
        return fetch("http://localhost:8088/images/4")
        .then(res => res.json())
        .then(setImage)
    }

    return (
        <ImageContext.Provider value={{images, getImages, setImage}}>
            {props.children}
        </ImageContext.Provider>
    )
}