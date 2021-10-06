import React from "react";
import pokemons from "./data";
import PokeList from "./PokeList";

class PokemonsRender extends React.Component {
  render() {
    return (
      <div className='cards'>
        {pokemons.map((pokemon) => <PokeList key={pokemon.id} pokemon={pokemon}/>)}
      </div>
    )
  }
}

export default PokemonsRender;