import { event } from 'jquery';
import {fetchPokemonDetail} from '../api/call-to -API-detail';
import {pokemonDetailClass} from '../models/pokemon'


const container = document.getElementById('grid');

const displayPlayerPokemon = async () => {
    const pokemonName = document.getElementById('arenaInput').value;
    const pokemon = await fetchPokemonDetail(pokemonName);
    const newPokemonPlayer = new pokemonDetailClass(
        pokemon.name,
        pokemon.pixelImage,
        pokemon.weight,
        pokemon.attack,
        pokemon.type,
        pokemon.baseExperience
    );

    const pokemonAttacks = pokemon.attack;
    let attackString = '';

    for (let index = 0; index < pokemonAttacks.length; index++) {
    attackString += `<div>${index+1} - ${pokemon.attack[index].ability.name}</div>`
    }

    let playerPokemon= document.createElement('div');
    playerPokemon.setAttribute('id','arenaMain');
    playerPokemon.classList.add('arena__main')
    container.appendChild(playerPokemon);
   
    let playerPokemonImg= document.createElement('img');
    playerPokemonImg.src=newPokemonPlayer.name
    playerPokemon.appendChild(playerPokemonImg);
    
    let playerPokemonName= document.createElement('h2');
    playerPokemonName.innerHTML=newPokemonPlayer.id
    playerPokemon.appendChild(playerPokemonName);

    document.getElementById('arenaInput').style.display='none'
    document.getElementById('arenaButton').style.display='none'
    document.getElementById('grid').style.flexDirection='row-reverse'

    const infoContainer = document.getElementById('infoDiv');
    document.getElementById('infoDiv').classList.add('arenaInfo')
    let pokemonStatusHTML=
        `<h4>HP: ${pokemon.weight}</h4>
        <h4>Attacks:</h4>
        <h4 id='attacks'>${attackString}</h4>`
    infoContainer.innerHTML = pokemonStatusHTML
    return newPokemonPlayer
  
};



const displayEnemyPokemon = async () => {
    const pokemonName = () => {
        let randomNumber = Math.round(Math.random()*(151-1)+parseInt(1));
        return randomNumber;
    }
    const pokemon = await fetchPokemonDetail(pokemonName());
    const newPokemonEnemy = new pokemonDetailClass(
        pokemon.name,
        pokemon.pixelImage,
        pokemon.type,
        pokemon.baseExperience
    );

    const pokemonDetailHTML = 
        `<input id='arenaInput' type='text' placeholder='Escoje a tu pokemon!'>
        <button id='arenaButton'>Fight!</button>
        <div class='arena__enemy'>
            <img class='showDetails__image' src='${newPokemonEnemy.name}'/>
            <h2 class='showDetails__name'>${newPokemonEnemy.id}</h2>
        </div>`;

    container.innerHTML = pokemonDetailHTML;
    
    document.getElementById('grid').classList.add('arena');
    const arenaTitle= document.getElementById('logo');
    const arenaSubTitle = document.createElement('h2');
    arenaSubTitle.innerHTML='ARENA';
    arenaTitle.appendChild(arenaSubTitle);

    document.getElementById('arenaButton').addEventListener('click',(event)=>{
        displayPlayerPokemon()
    })
    return newPokemonEnemy
};

// const battel = async () => {

//     const player = await displayPlayerPokemon();
//     const enemy = await displayEnemyPokemon();

//     const playerPokemon = newPokemonPlayer;
//     const enemyPokemon= newPokemonEnemy;
    
// }




export {displayEnemyPokemon,}