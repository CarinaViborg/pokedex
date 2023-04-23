import React, { useState, useEffect } from "react"
import Card from "../Components/Card"
import Pagination from "../Components/Pagination"
import axios from "axios"
import PokeInfo from "../Components/PokeInfo"

const Pokemon = () => {
    const [pokemonData, setPokemonData] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextPageUrl, setnextPageUrl] = useState()
    const [prevPageUrl, setprevPageUrl] = useState()
    const [loading, setLoading] = useState(true)
    const [pokeDex, setPokeDex] = useState()
    let cancel


    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c=>cancel=c) 
        })
        setnextPageUrl(res.data.next)
        setprevPageUrl(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url) 
            setPokemonData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1) 
                return state
            })
        })
    }

    useEffect(() => { 
        pokeFun()
        return () => cancel()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPageUrl]) 

    if (loading) return "Loading..."

    return (
        <>
            <div className="pokemonContainer">
                <div className="left-content">
                    <Card pokemon={pokemonData} infoPokemon={poke=>setPokeDex(poke)}/>
                    <Pagination
                        prevPageUrl={prevPageUrl}
                        setPokemonData={setPokemonData}
                        setCurrentPageUrl={setCurrentPageUrl}
                        nextPageUrl={nextPageUrl}
                    />
                </div>
                <div className="right-content">
                    <PokeInfo data={pokeDex}/>
                </div>
            </div>
        </>
    )
}

export default Pokemon