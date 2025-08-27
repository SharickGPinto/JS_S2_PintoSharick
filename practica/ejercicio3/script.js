// Endpoints TheMealDB (sin API key)
const buscarComidita = (q) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(q)}`;
const idapi = (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

const resultados = document.getElementById("resultados");   //RECORDAR ESTO VA DE EL INDEX
const formBuscar  = document.getElementById("formBuscar");  // TODO DE COMILLAS SE CADA DEL INDEX
const inputBuscar = document.getElementById("inputBuscar");
const modal       = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");
const detalleBox  = document.getElementById("detalle");


formBuscar.addEventListener("submit", async (e) => {
  e.preventDefault();
  const q = inputBuscar.value.trim();
  if (!q) { pintarVacio("Escribe algo para buscar."); return; }
  await buscarComidas(q);
});


buscarComidas("chicken");


async function buscarComidas(q) {
  limpiar(resultados);
  pintarMensaje("Buscando comidas...", true);

  try {
    const r = await fetch(buscarComidita(q));
    const data = await r.json();
    limpiar(resultados);

    if (!data.meals) {
      pintarVacio("No se encontraron comidas.");
      return;
    }

    data.meals.forEach(meal => {
      const card = crearCard(meal);
      resultados.append(card);
    });

  } catch (err) {
    limpiar(resultados);
    pintarVacio("Error al consultar la API.");
  }
}

function crearCard(meal) {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <div class="card__body">
      <h3>${meal.strMeal}</h3>
      <div class="meta">
        <span class="badge">${meal.strCategory || "Sin categoría"}</span>
        <span class="badge">${meal.strArea || "Desconocido"}</span>
      </div>
    </div>
  `;

  const btn = document.createElement("button");
  btn.textContent = "Ver detalle";
  btn.addEventListener("click", () => verDetalle(meal.idMeal));
  el.append(btn);
  return el;
}

async function verDetalle(idMeal) {
  try {
    const r = await fetch(idapi(idMeal));
    const data = await r.json();
    const meal = data.meals?.[0];
    if (!meal) return;

    const ingredientes = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const med = meal[`strMeasure${i}`];
      if (ing && ing.trim()) {
        ingredientes.push(`${ing}${med && med.trim() ? ` - ${med}` : ""}`);
      }
    }

    detalleBox.innerHTML = `
      <div class="detalle">
        <div>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <div>
          <h2>${meal.strMeal}</h2>
          <div class="meta" style="margin:8px 0;">
            <span class="badge">Categoría: ${meal.strCategory || "N/A"}</span>
            <span class="badge">Área: ${meal.strArea || "N/A"}</span>
          </div>

          <div class="section">
            <h4>Ingredientes</h4>
            <ul class="ingredients">
              ${ingredientes.map(i => `<li>${i}</li>`).join("") || "<li>N/A</li>"}
            </ul>
          </div>

          <div class="section">
            <h4>Instrucciones</h4>
            <div class="instructions">${(meal.strInstructions || "Sin instrucciones").trim()}</div>
          </div>

          ${meal.strYoutube ? `<div class="section"><h4>Video</h4><a target="_blank" href="${meal.strYoutube}">Ver en YouTube</a></div>` : ""}
        </div>
      </div>
    `;

    modal.setAttribute("aria-hidden", "false");
  } catch (e) {
    alert("No se pudo cargar el detalle.");
  }
}

function limpiar(node){ node.innerHTML = ""; }
function pintarVacio(msg){
  resultados.innerHTML = `<div class="empty">${msg}</div>`;
}
function pintarMensaje(msg, suave=false){
  const d = document.createElement("div");
  d.className = "empty";
  d.textContent = msg;
  if (suave) d.style.opacity = ".7";
  resultados.append(d);
}

cerrarModal.addEventListener("click", () => modal.setAttribute("aria-hidden","true"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.setAttribute("aria-hidden","true");
});
