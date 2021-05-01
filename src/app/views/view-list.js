import {fetchPokemonList,}from '../api/call-to-API'
import{displayPokemonData} from './view-detail'

const displayPokemonList = () => {

    const pokemonListPromise = fetchPokemonList();
    let i = 1;
    pokemonListPromise.then((pokemonList)=>{
        const father = document.getElementById('grid');
        pokemonList.forEach(pokemonElement => {

            let son = document.createElement('div');
            son.classList.add(`front__grid__character${i}`);
            son.classList.add(`front__grid__character`);

            let sonParagraph = document.createElement('p');
            sonParagraph.innerHTML = pokemonElement.name;

            let sonNumber = document.createElement('p');
            sonNumber.innerHTML=`Nº ${pokemonElement.id}`;
            
            let sonImage = document.createElement('img');
            sonImage.src = pokemonElement.img;
            
            father.appendChild(son);
            son.appendChild(sonParagraph);
            son.appendChild(sonNumber);
            son.appendChild(sonImage); 

            document.querySelector(`.front__grid__character${i}`).addEventListener('touchmove',(event)=>{
                const clickPokemon = event.currentTarget.firstChild.innerHTML;
                displayPokemonData(clickPokemon);
            });
            i++
        });
    });
};




export {
    displayPokemonList,

}