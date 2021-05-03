const talk = () => {
    const talkArea = document.getElementById('talkArea');
    const textA=`<p>Hola entrenador</p>`
    talkArea.innerHTML = textA
    setTimeout(function () {
        const textB=`<p>Bienvenido a la aplicacion de...</p>`;
        talkArea.innerHTML = textB
    }, 4000);
    setTimeout(function () {
        const textC=`<p>Pokemon de Jaime Labrador</p>`;
        talkArea.innerHTML = textC
    }, 8000);
    setTimeout(function () {
        const textD=`<p>Espero que te lo pases bien!</p>`;
        talkArea.innerHTML = textD
    }, 12000);
    setTimeout(function () {
        const textE=`<p>Puedes buscar tus pokemons favoritos...</p>`;
        talkArea.innerHTML = textE
    }, 16000);
    setTimeout(function () {
        const textE=`<p>en esta lista o bien en el buscador</p>`;
        talkArea.innerHTML = textE
    }, 20000);
    setTimeout(function () {
        const textE=`<p>Y no olvides pasar por la arena!</p>`;
        talkArea.innerHTML = textE
    }, 24000);
}

export {talk}