function PokemonCard(){
    let pokemon = pokemonList[1];
    
    return (
        <figure>
            {pokemon.imgSrc === undefined ? <p>???</p> : <img src= {pokemon.imgSrc} alt="" /> }
            <figcaption>
                {pokemon.name}
            </figcaption>
        </figure>




     /*   <figure>
            {pokemon.map((poke) => (
                <div key={poke.name}>
                    {poke.imgSrc === undefined ? <p>???</p> : <img src= {poke.imgSrc} alt="" /> }
                    <figcaption>
                        {poke.name}
                    </figcaption>
                </div>
            ))}
        </figure>*/
        );
}
    


export default PokemonCard;

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
        
    }
  ];

  