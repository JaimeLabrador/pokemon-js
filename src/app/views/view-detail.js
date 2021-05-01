import {fetchPokemonDetail} from '../api/call-to -API-detail';
import {pokemonDetailClass} from '../models/pokemon'


const displayPokemonData = async () => {
    const container = document.getElementById('grid');
    const pokemonName = document.getElementById('findInput').value;
    const pokemon = await fetchPokemonDetail(pokemonName);

    const newPokemon = new pokemonDetailClass(
        pokemon.id,
        pokemon.name,
        pokemon.image,
        pokemon.type,
        pokemon.attack
    );

    const pokemonAttacks = newPokemon.getPokemonAttacks();
    let attackString = '';

    for (let index = 0; index < pokemonAttacks.length; index++) {
        attackString += `<div>${index+1} - ${pokemonAttacks[index].ability.name}</div>`
    }
    const pokemonDetailHTML = 
        `<div class='showDetails'>
            <img class='showDetails__image' src='${newPokemon.getPokemonImage()}'/>
            <h2 class='showDetails__name'>Name: ${newPokemon.getPokemonName()}</h2>
            <h2 class='showDetails__id'>Number: ${newPokemon.getPokemonId()}</h2>
            <h2 class='showDetails__type'>Type: ${newPokemon.getPokemonType()}</h2>
            <h2 class='showDetails__attack'>Attacks:</h2>
            <h3 class='showDetails__attack__name'>${attackString}</h3>
        </div>`;
    container.innerHTML = pokemonDetailHTML;
};


export {displayPokemonData}