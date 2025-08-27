const nameP   = document.querySelector('.nombre');
const numP    = document.querySelector('#numero');
const imgP    = document.querySelector('.imgP');
const formP   = document.querySelector('.formulario');
const input   = document.querySelector('#busqueda');
const button1 = document.querySelector('.atras');
const button2 = document.querySelector('.siguiente');
const audP    = document.querySelector('.audP'); // ojo: clase correcta

let buscarP = 1; // id o nombre actual

// Trae datos del Pokémon por id o nombre
const fetchP = async (pokemon) => {
  try {
    const APIPo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIPo.status === 200) {
      const datos = await APIPo.json();
      return datos;
    }
    return null;
  } catch (e) {
    return null;
  }
};

// Renderiza la tarjeta
const renderPK = async (pokemon) => {
  imgP.style.display = 'none';
  nameP.textContent = 'Cargando...';
  numP.textContent  = '';

  const datos = await fetchP(pokemon);

  if (datos) {
    // nombre y número
    nameP.textContent = datos.name;
    numP.textContent  = datos.id;

    // sprite animado (fallback a sprite estático si es null)
    const animated =
      datos?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default;
    const fallback = datos?.sprites?.front_default;
    const imgSrc = animated || fallback;

    if (imgSrc) {
      imgP.src = imgSrc;
      imgP.alt = datos.name;
      imgP.style.display = 'block';
    } else {
      imgP.style.display = 'none';
    }

    // sonido (si existe)
    if (datos?.cries?.latest) {
      audP.src = datos.cries.latest;
    }

    // dejar limpio el input y guardar id actual
    input.value = '';
    buscarP = datos.id;
  } else {
    imgP.style.display = 'none';
    nameP.textContent = 'NO EXISTE';
    numP.textContent  = '';
  }
};

// Buscar por formulario (nombre o número)
formP.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim().toLowerCase();
  if (value) renderPK(value);
});

// Botón atrás (no bajar de 1)
button1.addEventListener('click', () => {
  if (buscarP > 1) {
    buscarP -= 1;
    renderPK(buscarP);
  }
});

// Botón siguiente
button2.addEventListener('click', () => {
  buscarP += 1;
  renderPK(buscarP);
});

// Búsqueda con Enter dentro del input
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const value = input.value.trim().toLowerCase();
    if (value) renderPK(value);
  }
});

// Carga inicial
renderPK(buscarP);