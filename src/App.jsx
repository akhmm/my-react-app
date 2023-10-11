import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"
import { useState } from "react";

function App(){
  
  const [pokemonIndex, setPokemonindex] = useState(0);
  //const [pokemonView, setPokemon ] = useState("pikachu")

  
  return(
      <div>
        
        <NavBar pokemonIndex={pokemonIndex} /*setCount={setCount}*/ pokemonList={pokemonList} setPokemonindex={setPokemonindex}/*pokemonView={pokemonView}*/ /*setPokemon={setPokemon}*/ />
        <PokemonCard pokemonList={pokemonList} /*pokemonView={pokemonView}*/ pokemonIndex={pokemonIndex}/>
    </div>
  )
}

export default App;

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

