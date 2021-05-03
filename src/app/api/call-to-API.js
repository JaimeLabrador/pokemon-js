
import {spinner} from '../utils/pokemon-utils'


const fetchPokemonList = async (offset) => {
    spinner.loader();
    const endPoint = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
    const pokemonListRequest = await fetch(endPoint)
        .catch((error)=> console.log(error));

    if (pokemonListRequest.status!==200) {
        spinner.hanleError({message:'error'});
        spinner.loader;
        return Promise.reject;
    }
    const result = await pokemonListRequest.json();

    const getIdUrl = (endPoint) =>{
        let pokemonUrl= endPoint.split('/');
        return pokemonUrl[pokemonUrl.length-2];
    };
    const getImg = (endPoint)=>{
        let pokemonUrl= endPoint.split('/');
        let pokemonId = pokemonUrl[pokemonUrl.length-2];
        let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
        return pokemonImg;
    };
    const pokemonAtributes = result.results.map (({name, url}) =>
        ({name, id:getIdUrl(url), img:getImg(url)}));
    
    spinner.loader();
    return pokemonAtributes;
};


export {fetchPokemonList,}; 