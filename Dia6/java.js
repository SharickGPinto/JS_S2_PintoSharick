/* CONSUMO DE APLI
MEDIANTE XMLHttpRequest*/

/*Modularizar el consumo de la api*/

function buscarPersonajes (){

    /* const nombre promt (ingresar el nombre del personaje)  */

    const xhr = new XMLHttpRequest(); //la importancion

    const url = fetch("https://rickandmortyapi.com/api/character");
    xhr.open ("GET", url, true);
    xhr.onreadystatechange = function (){

    };
    


}