document.addEventListener("DOMContentLoaded", function () {
  const botton = document.getElementById("btnBuscar");   /// todo loq tenga q ver con getElem es sacarlo del html
  const input = document.getElementById("nombreInput");  // y lo que esta en commitas con las clases como se llaman

  botton.addEventListener("click", function () {
    buscarPersonajes();
  });


  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") buscarPersonajes();
  });

  cargarP();
});

function cargarP() {
  const resultados = document.getElementById("resultados");  //donde deben aparecer los personajes
  resultados.innerHTML = "";

  const xhr = new XMLHttpRequest();
  const url = "https://rickandmortyapi.com/api/character";  // se extrae la api de aca copiando el link
  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      let daticos = JSON.parse(xhr.responseText);
      if (daticos.results && daticos.results.length > 0) {
        daticos.results.forEach(Personaje => {
          const article = document.createRange().createContextualFragment(`
            <article>
              <div class="image_container">
                <img src="${Personaje.image}" alt="${Personaje.name}">
              </div>
              <h2>${Personaje.name}</h2>
              <span>${Personaje.status} - ${Personaje.species}</span>
            </article>
          `);
          resultados.append(article);
        });
      } else {
        resultados.innerHTML = "<p>No se encontraron personajes.</p>";
      }
    } else {
      resultados.innerHTML = "<p>Error al cargar personajes iniciales.</p>";
    }
  };

  xhr.onerror = function () {
    resultados.innerHTML = "<p>No se pudo conectar con la API.</p>";
  };

  xhr.send();
}

function buscarPersonajes() {
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = ""; 

  const nombreUsar = document.getElementById("nombreInput").value.trim();
  if (!nombreUsar) {
    resultados.innerHTML = "<p>Escribe un nombre para buscar.</p>";
    return;
  }

  const xhr = new XMLHttpRequest();
  const url = `https://rickandmortyapi.com/api/character?name=${encodeURIComponent(nombreUsar)}`;
  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if (xhr.status === 200) {
      let daticos = JSON.parse(xhr.responseText);

      if (daticos.results && daticos.results.length > 0) {
        daticos.results.forEach(Personaje => {
          const article = document.createRange().createContextualFragment(/*html*/`
            <article>
              <div class="image_container">
                <img src="${Personaje.image}" alt="${Personaje.name}">
              </div>
              <h2>${Personaje.name}</h2>
              <span>${Personaje.status} - ${Personaje.species}</span>
            </article>
          `);
          resultados.append(article);
        });
      } else {
        resultados.innerHTML = "<p>No se encontraron personajes.</p>";
      }
    } else if (xhr.status === 404) {
      resultados.innerHTML = "<p>No se encontraron personajes con ese nombre.</p>";
    } else {
      resultados.innerHTML = "<p>Error al consultar la API.</p>";
    }
  };

  xhr.onerror = function () {
    resultados.innerHTML = "<p>No se pudo conectar con la API.</p>";
  };

  xhr.send();
}

