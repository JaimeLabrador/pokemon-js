import {spinner} from '../utils/pokemon-utils'


const fetchPokemonDetail = async (pokemonName) => {
    spinner.loader();

    const endPoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    const pokemonDetailRequest = await fetch(endPoint)
    .catch((error)=> console.log(error));

    if (pokemonDetailRequest.status!==200) {
        spinner.hanleError({message:'error'});
        spinner.loader;
        return Promise.reject;
    }

    const pokemonDetailAnswer = await pokemonDetailRequest.json();

        let pokemonAtributes = {
        name:pokemonDetailAnswer.name,
        image:pokemonDetailAnswer.sprites.other.dream_world.front_default,
        type: pokemonDetailAnswer.types.map((element)=>element.type.name).join(', '),
        id: pokemonDetailAnswer.id,
        attack: pokemonDetailAnswer.abilities,
        pixelImage:pokemonDetailAnswer.sprites.front_default,
        baseExperience:pokemonDetailAnswer.base_experience,
        weight:pokemonDetailAnswer.weight
        };
        spinner.loader();

        return pokemonAtributes
}




export {fetchPokemonDetail}