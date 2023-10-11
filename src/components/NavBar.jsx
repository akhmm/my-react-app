function NavBar({pokemonIndex, setCount, pokemon}){

  const incriment = () => {
    setCount(pokemonIndex + 1)
  }
  
  const decriment = () => {
    setCount(pokemonIndex - 1)
  }

return(
    
    <div>
        {pokemonIndex > 0 
            ? <button onClick={decriment}>"Précédent"</button> 
            : <></> 
        }

        {pokemonIndex < pokemon.length - 1
        
        ? <button onClick={incriment}>"Suivant"</button>
        : <></>
        }
    </div>
)
}

export default NavBar;