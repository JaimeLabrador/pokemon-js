import {fetchPokemonDetail} from '../api/call-to -API-detail';
import {pokemonDetailClass} from '../models/pokemon';
import {fetchEnemyPokemonType, fetchPlayerPokemonType} from '../api/call-to-API-type';


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
    playerPokemonImg.setAttribute('id', 'playerPokemonImage');
    playerPokemonImg.src=newPokemonPlayer.name;
    playerPokemon.appendChild(playerPokemonImg);
    
    let playerPokemonName= document.createElement('h2');
    playerPokemonName.setAttribute('id', 'arenaPlayerName');
    playerPokemonName.innerHTML=newPokemonPlayer.id
    playerPokemon.appendChild(playerPokemonName);

    document.getElementById('arenaInput').style.display='none'
    document.getElementById('arenaButton').style.display='none'
    document.getElementById('grid').style.flexDirection='row-reverse'

    const infoContainer = document.getElementById('infoDiv');
    document.getElementById('infoDiv').classList.add('arenaInfo')
    let pokemonStatusHTML=
        `<h4 id='playerHP'>HP: ${pokemon.weight}</h4>
        <h4>Attacks:</h4>
        <h4 id='attacks'>${attackString}</h4>`
        
    infoContainer.innerHTML = pokemonStatusHTML

    document.getElementById('attacks').addEventListener('click', (event)=>{
        battel();
    });

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
        pokemon.baseExperience,
        pokemon.weight
    );

    const pokemonDetailHTML = 
        `<input id='arenaInput' type='text' placeholder='Escoje a tu pokemon!'>
        <button id='arenaButton'>Fight!</button>
        <div id='arenaEnemy' class='arena__enemy'>
            <img id='pokemonEnemyImage' class='showDetails__image' src='${newPokemonEnemy.name}'/>
            <h2 id='enemyHP'>HP:${pokemon.weight}</h2>
            <h2 id='arenaEnemyName' class='showDetails__name'>${newPokemonEnemy.id}</h2>
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


const battel = async () => {
    
    const arena = document.getElementById('grid');
    const playerHP=document.getElementById('playerHP');
    const enemyHP=document.getElementById('enemyHP');
    const playerPokemonImage = document.getElementById('playerPokemonImage')
    const enemyPokemonImage = document.getElementById('pokemonEnemyImage')
    
    let enemyID = document.getElementById('arenaEnemyName');
    const pokemonEnemyName = enemyID.innerHTML;
    
    let mainID = document.getElementById('arenaPlayerName');
    const pokemonPlayerName=mainID.innerHTML;
    
    const enemyPokemon = await fetchPokemonDetail(pokemonEnemyName);
    const playerPokemon = await fetchPokemonDetail(pokemonPlayerName);
    
    let enemyPokemonHP = parseInt(enemyHP.innerHTML.replace(/[: H P]+/g,''), 10);
    const enemyPokemonDMG= enemyPokemon.baseExperience;
    let enemyType = enemyPokemon.type;

    let playerPokemonHP= parseInt(playerHP.innerHTML.replace(/[: H P]+/g,''), 10);
    const playerPokemonDMG= playerPokemon.baseExperience;
    let playerType = playerPokemon.type;

    let enemyTypes = enemyType.split(', ');
    let playerTypes = playerType.split(", ");

    playerPokemonImage.classList.toggle('animate');

    playerTypes.forEach(async playerType => {
       let playerDamageRelation = await fetchEnemyPokemonType(playerType);
    if (playerDamageRelation.noDamageTo.includes(enemyType) ) {
        let newEnemyHP = `HP : ${enemyPokemonHP}`;
        enemyHP.innerHTML= newEnemyHP;
    };
    if (playerDamageRelation.halfDamageTo.includes(enemyType)) {
        let newEnemyHP = `HP : ${Math.round(enemyPokemonHP-((playerPokemonDMG/3)/2))}`;
        enemyHP.innerHTML= newEnemyHP;
    };
    if (playerDamageRelation.doubleDamageTo.includes(enemyType)) {
        let newEnemyHP = `HP : ${Math.round(enemyPokemonHP-((playerPokemonDMG/3)*2))}`;
        enemyHP.innerHTML= newEnemyHP;
    }else{
        let newEnemyHP = `HP : ${Math.round(enemyPokemonHP-((playerPokemonDMG/3)))}`;
        enemyHP.innerHTML= newEnemyHP;
    };
    if (parseInt(enemyHP.innerHTML.replace(/[: H P]+/g,''), 10)<= 0) {
        const victory = `<h4>YOU WIN!</h4>`;
        arena.innerHTML=victory;
    };
    });

    setTimeout(() => {
        enemyPokemonImage.classList.toggle('animate');
        enemyTypes.forEach(async enemyType => {
            let enemyDamageRelation = await fetchEnemyPokemonType(enemyType);
        if (enemyDamageRelation.noDamageTo.includes(playerType) ) {
            let newPlayerHP = `HP : ${playerPokemonHP}`;
            playerHP.innerHTML= newPlayerHP;
        };
        if (enemyDamageRelation.halfDamageTo.includes(playerType)) {
            let newPlayerHP = `HP : ${Math.round (playerPokemonHP-((enemyPokemonDMG/3)/2))}`;
            playerHP.innerHTML= newPlayerHP;
        };
        if (enemyDamageRelation.doubleDamageTo.includes(playerType)) {
            let newPlayerHP = `HP : ${Math.round (playerPokemonHP-((enemyPokemonDMG/3)*2))}`;
            playerHP.innerHTML= newPlayerHP;
        }else{
            let newPlayerHP = `HP : ${Math.round (playerPokemonHP-((enemyPokemonDMG/3)))}`;
            playerHP.innerHTML= newPlayerHP;
        };
        if (parseInt(playerHP.innerHTML.replace(/[: H P]+/g,''), 10)<= 0) {
            const victory = `<h4>DEFEAT!</h4>`;
            arena.innerHTML=victory;
        };
        });

    }, 2000);

    setTimeout(() => {
        playerPokemonImage.classList.toggle('animate');
        enemyPokemonImage.classList.toggle('animate');
    }, 1000);
};




export {displayEnemyPokemon,battel}


