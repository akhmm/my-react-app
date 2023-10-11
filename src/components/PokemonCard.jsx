import PropTypes from "prop-types";


function PokemonCard ({ pokemonList, pokemonView, pokemonIndex }) {
    PokemonCard.propTypes = {
        pokemon:PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc : PropTypes.string,
        })
    }
    
    return (
        <figure>
            {pokemonList[pokemonIndex].imgSrc === undefined ? <p>???</p> : <img src= {pokemonList[pokemonIndex].imgSrc} alt="" /> }
            <figcaption>
                {pokemonList[pokemonIndex].name}
            </figcaption>
        </figure>
    )
    
}
export default PokemonCard;

/*
{console.log(pokemonView)}
    let viewList = pokemonList.filter((poke) => poke.name === pokemonView)
    
    return (
        viewList.map((view) => 
        <figure key={view.name}>
            {view.imgSrc === undefined ? <p>???</p> : <img src= {view.imgSrc} alt="" /> }
            <figcaption>
                {view.name}
            </figcaption>
        </figure>)
    )

*/


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

    



