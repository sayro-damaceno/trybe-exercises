import React from "react";
import pokemons from "./data";

function createPokeCard(obj) {
  return(
    <div className='card'>
      <div>
        <p>{obj.name}</p>
        <p>{obj.type}</p>
        <p>{obj.averageWeight.value} {obj.averageWeight.measurementUnit}</p>
      </div>
        <img src={obj.image} alt={obj.name}></img>
    </div>
  )
}

class PokemonsRender extends React.Component {
  render() {
    return (
      <div className='cards'>
        {pokemons.map((pokemon) => createPokeCard(pokemon))}
      </div>
    )
  }
}

export default PokemonsRender;