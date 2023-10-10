import PropTypes from "prop-types";


function PokemonCard ({ pokemon }) {
    /*console.log(props);*/
    console.log(pokemon);
    PokemonCard.propTypes = {
        pokemon:PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc : PropTypes.string,
        })
    }
    
    return (
        <figure>
            {pokemon.imgSrc === undefined ? <p>???</p> : <img src= {pokemon.imgSrc} alt="" /> }
            <figcaption>
                {pokemon.name}
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

    



