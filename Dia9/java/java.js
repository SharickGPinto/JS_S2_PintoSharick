const nameP = document.querySelector('.nombre');
const numP = document.querySelector('#numero');
const imgP = document.querySelector('.imgP');
const formP = document.querySelector('.formulario');
const input = document.querySelector('#busqueda');
const button1 = document.querySelector('.atras');
const button2 = document.querySelector('.siguiente');
const audP = document.querySelector('.sonido');

let buscarP = 1;
const fetchP = async (pokemon) => {
    const APIPo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    imgP.computedStyleMap.display = 'block';
    nameP.innerHTML = DataTransfer.name;
}
