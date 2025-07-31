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

    if (APIPo.status == 200) {
        const datos = await APIPo.json();
        return datos;
    }
}
const renderPK = async (pokemon) => {
    imgP.style.display = 'none'
    nameP.innerHTML = 'Cargando...';
    numP.innerHTML = '';
    const datos = await fetchP(pokemon);

    if (datos) {
        imgP.style.display = 'block';
        nameP.innerHTML = datos.name;
        numP.innerHTML = datos, id;
        imgP.src = datos['sprites']['version']['generation-v']['black-white']['animated']['front_default'];
        audP.src = datos.cries.latest;
        input.value = '';
        buscarP = datos.id;
    } else {
        imgP.style.display = 'none'
        nameP.innerHTML = "N0 EXSTE";
        numP.innerHTML = '';
    }
}

form
