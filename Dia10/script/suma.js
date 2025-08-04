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

function nuevaR(){
    const cartas = document.getElementById("cartas")
    cartas.innerHTML = "";
    document.getElementById("resultado").textContent ="";
    document.getElementById("respuesta").value = "";

    const barajas = baraja([...cartas]) 
    primeraCarta = barajas [0];
    segundaCarta = barajas [1];
    suma = valorcarta(primeraCarta)+ valorcarta(segundaCarta);

    cartas.innerHTML = `
     <img src="https://deckofcardsapi.com/static/img/${carta1}.png" alt="carta1">
        <img src="https://deckofcardsapi.com/static/img/${carta2}.png" alt="carta2">
    `;
}

function verificar(){
    const respuesta = parseInt(document.getElementById("respuesya").value);
    const resultado = document,getElementById("resultado");
    if(respuesta === suma){
        resultado.textContent = "win"
    } else{
        resultado.textContent = `mal la suma era ${suma}`;

    }

}
nuevaR();


