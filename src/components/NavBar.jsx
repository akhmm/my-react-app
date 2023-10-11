function NavBar({pokemonList, setPokemon, pokemonView}){
/*function NavBar({pokemonIndex, setCount, pokemonList, setPokemon, pokemonView }){*/

/*  const incriment = () => {
    setCount(pokemonIndex + 1)
  }
  
  const decriment = () => {
    setCount(pokemonIndex - 1)
  }
*/
  const ClickPokemon = (e) => {
    setPokemon(e.target.value);
    
  }

return(
    <div>
      {pokemonList.map((pokemon) => 
      <button onClick={ClickPokemon} value={pokemon.name} key={pokemon.name}>{pokemon.name}</button>)}
    </div>
)
}

export default NavBar;

/*<div>
        {pokemonIndex > 0 
            ? <button onClick={decriment}>"Précédent"</button> 
            : <></> 
        }

        {pokemonIndex < pokemon.length - 1
        
        ? <button onClick={incriment}>"Suivant"</button>
        : <></>
        }
    </div>

*/