import {spinner} from '../utils/pokemon-utils'


const fetchEnemyPokemonType = async (enemyType) => {
    spinner.loader();

    const endPoint = `https://pokeapi.co/api/v2/type/${enemyType}/`;

    const pokemonTypeRequest = await fetch(endPoint)
    .catch((error)=> console.log(error));

    if (pokemonTypeRequest.status!==200) {
        spinner.hanleError({message:'error'});
        spinner.loader;
        return Promise.reject;
    }

    const pokemonTypeAnswer = await pokemonTypeRequest.json();

        let pokemonTypeElements = {
        name:pokemonTypeAnswer.name,
        noDamageTo:pokemonTypeAnswer.damage_relations.half_damage_to.map((element)=>element.name).join(', '),
        halfDamageTo:pokemonTypeAnswer.damage_relations.no_damage_to.map((element)=>element.name).join(', '),
        doubleDamageTo:pokemonTypeAnswer.damage_relations.double_damage_to.map((element)=>element.name).join(', '),
        noDamagefrom:pokemonTypeAnswer.damage_relations.no_damage_from.map((element)=>element.name).join(', '),
        halfDamagefrom:pokemonTypeAnswer.damage_relations.half_damage_from.map((element)=>element.name).join(', '),
        doubleDamagefrom:pokemonTypeAnswer.damage_relations.double_damage_from.map((element)=>element.name).join(', '),
        };
    spinner.loader();

    return pokemonTypeElements;
};


const fetchPlayerPokemonType = async (playerType) => {
    spinner.loader();

    const endPoint = `https://pokeapi.co/api/v2/type/${playerType}/`;

    const pokemonTypeRequest = await fetch(endPoint)
    .catch((error)=> console.log(error));

    if (pokemonTypeRequest.status!==200) {
        spinner.hanleError({message:'error'});
        spinner.loader;
        return Promise.reject;
    }

    const pokemonTypeAnswer = await pokemonTypeRequest.json();

        let pokemonTypeElements = {
        name:pokemonTypeAnswer.name,
        noDamageTo:pokemonTypeAnswer.damage_relations.half_damage_to.map((element)=>element.name).join(', '),
        halfDamageTo:pokemonTypeAnswer.damage_relations.no_damage_to.map((element)=>element.name).join(', '),
        doubleDamageTo:pokemonTypeAnswer.damage_relations.double_damage_to.map((element)=>element.name).join(', '),
        noDamagefrom:pokemonTypeAnswer.damage_relations.no_damage_from.map((element)=>element.name).join(', '),
        halfDamagefrom:pokemonTypeAnswer.damage_relations.half_damage_from.map((element)=>element.name).join(', '),
        doubleDamagefrom:pokemonTypeAnswer.damage_relations.double_damage_from.map((element)=>element.name).join(', '),
        };
        spinner.loader();

        return pokemonTypeElements;
}

export { fetchEnemyPokemonType, fetchPlayerPokemonType}