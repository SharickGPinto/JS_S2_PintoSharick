/* CODIGOS DE LAS CARTAS GENERADOS MANUALMENTE */
const rankin = ["A", "2", "3", "4", "5", "6", "7", "9", "10", "J", "Q", "K"];

const esp =["H", "D", "C", "S"];

let cartas =[];

/*CREAR LAS 52 CARTAS */
suits.forEach(suit => {
    rankin.forEach(rankin => {
        cartas.push(`${rankin}${suit}`);
    });
});