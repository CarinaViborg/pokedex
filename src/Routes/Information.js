import React, { useState } from "react"
import PokeInfo from "../Components/PokeInfo"

const Information = () => {
    const [pokemon, setPokemon] = useState("")
    const [pokemonData, setPokemonData] = useState([])

    const getPokemon = async () => {
        const pokemonArray = []
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
            if (!response.ok) throw new Error("Response was not OK!")
            const pkmn = await response.json()

            pokemonArray.push(pkmn)
            setPokemonData(pokemonArray)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getPokemon()
    }

    return (
        <div className="PokemonDetail">
            <h1>Pokemon details!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Enter pokemon name"
                    >
                    </input>
                </label>
            </form>
            <div className="barsInformationPageDiv">
            {pokemonData.map((data) => {
                return <div key={data.id}>
                    <PokeInfo data={data}/>
                    </div>})}
            </div>
        </div>
    )
}
export default Information