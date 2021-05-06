import {fetchPokemonDetail, fetchPokemonDetailRelated} from '../api/call-to -API-detail';
import {pokemonDetailClass} from '../models/pokemon'

const displayPokemonData = async (pokemonName) => {
    const container = document.getElementById('grid');
    const relatedContainer = document.getElementById('infoDiv')
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
            <h2 id='pokemonType' class='showDetails__type'>Type: ${newPokemon.getPokemonType()}</h2>
            <h2 class='showDetails__attack'>Attacks:</h2>
            <h3 class='showDetails__attack__name'>${attackString}</h3>
            <div class='relatedAll'>
            <div class='relatedTitle'>
                <h3>Related pokemons:</h3>
            </div>
            <div id='related' class='related'></div>
        </div>
        </div>`;

    container.innerHTML = pokemonDetailHTML;

    document.getElementById('grid').classList.add('detail');

    let pokemonType=document.getElementById('pokemonType');
    let type= pokemonType.innerHTML;
    let cleanType = type.replace('Type: ','').split(', ')
    const containerList = document.getElementById('related');
    for (let i = 1; i <= 150; i++) {
        const pokemonRelated = fetchPokemonDetailRelated(i);
        pokemonRelated.then((pokemonRelatedList)=>{
            cleanType.forEach(element => {
                pokemonRelatedList.types.map((types)=>{
                    if ( element=== types.type.name) {
                        let imgSon = document.createElement('img');
                        imgSon.src = pokemonRelatedList.sprites.other.dream_world.front_default;
                        containerList.appendChild(imgSon);
                    };
                });
            });
        });
    };
};

export {displayPokemonData, }