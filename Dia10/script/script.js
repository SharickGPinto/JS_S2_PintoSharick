function getData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
    xhr.send();
}

/* BARAJAS DE LAS CARTAS */
function barajadita(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/* DETENCCION DE PARES */

let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false;
let paresEncontrados = 0;


/*  RENDER CARTAS VOLTEADAS */
function renderCartas(seleccionadas) {
    const main = document.getElementById("cartas");
    main.innerHTML = "";

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
            if (bloqueo) return;
            const img = article.querySelector("img");
            const atras = "https://deckofcardsapi.com/static/img/back.png";
            const adelante = img.getAttribute("daticos");

            // ACA EVITA VOLVER A VOLTEAR LA CARTA
            if (img.src === adelante) return;

            img.src = adelante;

            if (!primeraCarta) {
                primeraCarta = img;
            } else if (!segundaCarta) {
                segundaCarta = img;
                bloqueo = true;


                // COMPARAR
                if (primeraCarta.getAttribute("data-front") === segundaCarta.getAttribute("data-front")) {
                    paresEncontrados++;
                    primeraCarta = null;
                    segundaCarta = null;
                    bloqueo = false;

                if (paresEncontrados === 8) {
                        setTimeout(() => {
                            window.location.href = "../pages/menu.html"; // redirigir al menú
                        }, 1000);
                    }    
                } else {
                    // SE TAPAN SI SON DIFERENTES
                    setTimeout(() => {
                        primeraCarta.src = atras;
                        segundaCarta.src = atras;
                        primeraCarta = null;
                        segundaCarta = null;
                        bloqueo = false;
                    }, 1000);
                }
            }
        });
        main.appendChild(article);
    });
}
function jueguito() {

    getData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", function (carticas) {
        const carticasid = carticas.deck_id;

        getData(`https://deckofcardsapi.com/api/deck/${carticasid}/draw/?count=8`, function (cartasd) {
            let cartas = cartasd.cards.map(carta => carta.code);

            let seleccionadas = barajadita([...cartas, ...cartas]);
            renderCartas(seleccionadas);
        });
    });
}

jueguito();