import {fetchPokemonDetail} from '../api/call-to -API-detail';
import {pokemonDetailClass} from '../models/pokemon'


const container = document.getElementById('grid');

const displayPlayerPokemon = async () => {
    const pokemonName = document.getElementById('arenaInput').value;
    const pokemon = await fetchPokemonDetail(pokemonName);
    const newPokemon = new pokemonDetailClass(
        pokemon.name,
        pokemon.pixelImage,
        pokemon.weight,
        pokemon.attack
    );

    const pokemonAttacks = newPokemon.getPokemonAttacks();
    let attackString = '';

    for (let index = 0; index < pokemon.attack.length; index++) {
    attackString += `<div>${index+1} - ${pokemon.attack[index].ability.name}</div>`
    }

    let playerPokemon= document.createElement('div');
    playerPokemon.setAttribute('id','arenaMain');
    container.appendChild(playerPokemon);
   
    let playerPokemonImg= document.createElement('img');
    playerPokemonImg.src=newPokemon.name
    playerPokemon.appendChild(playerPokemonImg);
    
    let playerPokemonName= document.createElement('h2');
    playerPokemonName.innerHTML=newPokemon.id
    playerPokemon.appendChild(playerPokemonName);

    document.getElementById('arenaInput').style.display='none'
    document.getElementById('arenaButton').style.display='none'

    const infoContainer = document.getElementById('infoDiv');
    let pokemonStatusHTML=
        `<h4>HP: ${pokemon.weight}</h4>
        <h4>Attacks:</h4>
        <h4>${attackString}</h4>`
    infoContainer.innerHTML = pokemonStatusHTML
};




const displayEnemyPokemon = async () => {
    const pokemonName = () => {
        let randomNumber = Math.round(Math.random()*(151-1)+parseInt(1));
        return randomNumber;
    }
    const pokemon = await fetchPokemonDetail(pokemonName());
    const newPokemon = new pokemonDetailClass(
        pokemon.name,
        pokemon.pixelImage,
    );

    const pokemonDetailHTML = 
        `<input id='arenaInput' type='text' placeholder='Escoje a tu pokemon!'>
        <button id='arenaButton'></button>
        <div class='arena__enemy'>
            <img class='showDetails__image' src='${newPokemon.name}'/>
            <h2 class='showDetails__name'>${newPokemon.id}</h2>
        </div>`;

    container.innerHTML = pokemonDetailHTML;

    document.getElementById('grid').style.backgroundImage=`url('../assets/arena-back.jpg')`;
    document.getElementById('grid').style.backgroundSize='cover';

    document.getElementById('arenaButton').addEventListener('click',(event)=>{
        displayPlayerPokemon()
    })

};

export {displayEnemyPokemon,}