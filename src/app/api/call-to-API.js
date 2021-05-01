const fetchPokemonList = async () => {
    const endPoint = `https://pokeapi.co/api/v2/pokemon/`;
    const pokemonListRequest = await fetch(endPoint)
        .catch((error)=> console.log(error));
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
    return pokemonAtributes;
};


export {fetchPokemonList,}; 