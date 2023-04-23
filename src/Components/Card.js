import React from "react"
import typeColors from "../Helpers/TypeColors"

const Card = ({ pokemon, infoPokemon }) => {
    
    return (

        <>
            {
                pokemon.map((item) => {
                    const primaryType = item.types[0].type.name
                    const secondaryType = item.types[1]?.type.name
                    return (
                        
                            <div className="card" key={item.id} onClick={() => infoPokemon(item)}
                             style={{ background: `linear-gradient(to right, ${typeColors[primaryType]}, ${typeColors[secondaryType ? secondaryType : primaryType]})` }}>
                                <div className="numberDiv">
                                    <h2>#{item.id}</h2>
                                </div>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        
                    )
                })
            }

        </>
    )
}
export default Card