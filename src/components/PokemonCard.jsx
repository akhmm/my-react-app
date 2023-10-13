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

    

/* 下記の場合は&&がないと、存在しないindexを選択した際に、.imgSrcは存在しないよというエラーとなる

function PokemonCard() {

    const pokemon = pokemonList[2];

    return pokemon && 
        pokemon.imgSrc ?
        <figure>
            <img src={pokemon.imgSrc} alt={pokemon.imgSrc} />
            <figcaption>{pokemon.name}</figcaption>
        </figure> :
        <p>???</p>

}
*/

