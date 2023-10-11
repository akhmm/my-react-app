import PropTypes from "prop-types";


function PokemonCard ({ pokemonList, pokemonView }) {
    /*PokemonCard.propTypes = {
        pokemon:PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc : PropTypes.string,
        })
    }*/

    let pok = pokemonList.filter((poke) => poke.name === pokemonView)
    
    return (
        <figure>
            {console.log(pok[0].name)}
            {console.log(pokemonList[0].name === pokemonView)}
            {console.log(pokemonList.length)}
            {console.log("pokemonview :" + pokemonView)}
            {pok[0].imgSrc === undefined ? <p>???</p> : <img src= {pok[0].imgSrc} alt="" /> }
            <figcaption>
                {pokemonView.name}
            </figcaption>
        </figure>
    )
    
}
export default PokemonCard;




     /*   <figure>
            {pokemon.map((poke) => (
                <div key={poke.name}>
                    {poke.imgSrc === undefined ? <p>???</p> : <img src= {poke.imgSrc} alt="" /> }
                    <figcaption>
                        {poke.name}
                    </figcaption>
                </div>
            ))}
        </figure>
        );*/

    



