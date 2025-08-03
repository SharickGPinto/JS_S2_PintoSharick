/* CODIGOS DE LAS CARTAS GENERADOS MANUALMENTE */
const rankin = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const esp = ["H", "D", "C", "S"];

let cartas = [];
/*CREAR LAS 52 CARTAS */
esp.forEach(suit => {
    rankin.forEach(rank => {
        cartas.push(`${rank}${suit}`);
    });
});


/* BARAJAS DE LAS CARTAS */
function baraja(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
/*  RENDER CARTAS VOLTEADAS */
function renderCartas() {
    const main = document.getElementById("cartas");
    main.innerHTML = "";

    // BARAJA DE 16 CARTAS
    const seleccionadas = baraja([...cartas]).slice(0, 16);

    seleccionadas.forEach(cartacode => {
        const article = document.createElement("article");
        article.classList.add("cartas")

        // PARTE TRASERA DE LAS CARTAS
        article.innerHTML = `
        <img src="https://deckofcardsapi.com/static/img/back.png" 
           data-front="https://deckofcardsapi.com/static/img/${cartacode}.png" 
           alt="Carta">
    `;

        /* EVENTO DE MOVIMIENTO DE LA CARTA*/

        article.addEventListener("click", () => {
            const img = article.querySelector("img");
            const atras = "https://deckofcardsapi.com/static/img/back.png";
            const adelante = img.getAttribute("data-front");
            img.src = img.src === atras ? adelante : atras;
        });
        main.appendChild(article);
    });
} 
renderCartas();