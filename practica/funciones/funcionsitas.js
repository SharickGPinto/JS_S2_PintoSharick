
// listar cursitos ejemplo de lms
const cursitos = document.getElementById("id");
cursitos.innerHTML = "";
array.forEach(item => {
   cursitos.innerHTML += `<div>${item.nombre}</div>`;
});


// crear curso con input
let cursos = [
  { id: 1, nombre: "JavaScript Básico", duracion: "4 semanas" },
  { id: 2, nombre: "HTML & CSS", duracion: "3 semanas" }
];

function mostrarCursos() {
  const cont = document.getElementById("resultados");
  cont.innerHTML = "";
  cursos.forEach(curso => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${curso.nombre}</h3><p>${curso.duracion}</p>`;
    cont.append(card);
  });
}

//forma de buscar persona con la api de rick and morty
async function buscarPersonajes(nombre) {
  const resp = await fetch(`https://rickandmortyapi.com/api/character?name=${nombre}`);
  if (resp.status === 200) {
    const data = await resp.json();
    data.results.forEach(p => {
      console.log(p.name, p.status);
    });
  } else {
    console.log("No encontrado");
  }
}

// tip para cambiar estilos
function cambiarColor() {
  const caja = document.getElementById("cajita");
  caja.style.background = "tomato";
}

// eventico de boton
document.getElementById("btnClick").addEventListener("click", () => {
  alert("¡Botón presionado!");
});







