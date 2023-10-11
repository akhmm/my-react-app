import PropTypes from "prop-types";


function PokemonCard ({ pokemonList, pokemonView }) {
    PokemonCard.propTypes = {
        pokemon:PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc : PropTypes.string,
        })
    }
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

    



