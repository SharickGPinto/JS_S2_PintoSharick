/* CODIGOS DE LAS CARTAS GENERADOS MANUALMENTE */
const rankin = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"];
const esp = ["H", "D", "C", "S"];

let cartas = [];
/*CREAR LAS 52 CARTAS */
esp.forEach(suit => {
    rankin.forEach(rank => {
        cartas.push(`${rank}${suit}`);
    });
});

/* PARA OBTENER EL VALOR DE LA CARTA */
function valorcarta(codigo) {
    let rank = codigo.slice(0, -1);
    if(rank === "A") return 1;
    if(rank === "J") return 11;
    if(rank === "Q") return 12;
    if(rank === "K") return 13;
    if(rank === "0") return 10;
        return parseInt(rank)
}


/* BARAJAS DE LAS CARTAS */
function baraja(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let primeraCarta, segundaCarta, suma;


