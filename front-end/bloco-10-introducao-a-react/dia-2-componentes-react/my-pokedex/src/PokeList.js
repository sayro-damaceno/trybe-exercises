import React from "react";

class PokeList extends React.Component {
  render() {

    const { pokemon } = this.props;

    return (
      <div className='card'>
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
        </div>
          <img src={pokemon.image} alt={pokemon.name}></img>
      </div>
    )
  }
}

export default PokeList;