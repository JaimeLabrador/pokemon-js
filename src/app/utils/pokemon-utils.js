
class spinner {
    constructor () {}
        static hanleError (error) {
            const pokemonHTMLStringError=
            `<div>
            <p>Ese pokemon no existe!</p>
            </div>`
            document.getElementById('body').innerHTML = pokemonHTMLStringError;
        }
        static loader (){
            document.getElementById('loader').classList.toggle('is-hidden');
        }
};

export {spinner}