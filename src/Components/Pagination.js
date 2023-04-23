import React from "react"

export default function Pagination({prevPageUrl, setPokemonData, setCurrentPageUrl, nextPageUrl}){
    return (
        <div className="btn-group">
        {  prevPageUrl && <button onClick={()=>{
            setPokemonData([])
           setCurrentPageUrl(prevPageUrl) 
        }}>Previous</button>}

        { nextPageUrl && <button onClick={()=>{
            setPokemonData([])
            setCurrentPageUrl(nextPageUrl)
        }}>Next</button>}

    </div>
    )
}