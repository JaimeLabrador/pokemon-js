
import './styles/styles.scss';
import 'bootstrap';
import{displayPokemonData} from '../app/views/view-detail'
import { displayPokemonList,} from './views/view-list';
import{ glider } from './utils/glider';
import {displayMenu} from './utils/menu'

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
};

window.onload = () =>{
    addListeners(),
    displayPokemonList()
    // displayPokemonData()
    // displaySelectedPokemon()
};