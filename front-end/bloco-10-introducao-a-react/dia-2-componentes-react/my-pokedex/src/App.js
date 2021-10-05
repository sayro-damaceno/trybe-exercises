import PokemonsRender from './PokemonsRender';
import pokemons from "./data";
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <PokemonsRender pokemons={pokemons}/>
    </>
  );
}

export default App;
