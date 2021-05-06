
import './styles/styles.scss';
import 'bootstrap';
import{displayPokemonData,} from '../app/views/view-detail'
import { displayPokemonList, loadCarrousel} from './views/view-list';
import{ glider } from './utils/glider';
import {displayMenu, } from './utils/menu'
import {talk, } from './utils/talk'
import {displayEnemyPokemon,} from './views/view-random'

window.addEventListener('load' ,()=>{
    new Glider (document.querySelector('.front__grid'), {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: false,
        dots: '.dots',
    });
});

const addListeners = () => {
    document.getElementById('findButton').addEventListener('click',(event)=>{
        let pokemonName = document.getElementById('findInput')
        .value
        .toLowerCase();
        displayPokemonData(pokemonName);
    });
    document.getElementById('menuButton').addEventListener('click',(event)=>{
        displayMenu();
    })
    document.getElementById('menuArena').addEventListener('click', (event)=>{
        displayEnemyPokemon()
    })
    document.getElementById('menuHome').addEventListener('click', (event)=>{
        location.reload()
    })

};

window.onload = () =>{
    addListeners(),
    displayPokemonList(),
    loadCarrousel(),
    talk()
    // displayPokemonData()
    // displaySelectedPokemon()
};