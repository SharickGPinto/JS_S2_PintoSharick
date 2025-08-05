/*Consumo de API
Mediante XMLHttpRequest */

// Modularizar el consumo de api

function informacionP() {
    document.getElementById("resultados").innerHTML = ``;
    // const nombreP  

    const nombreP = document.getElementById("nombreInput").value.trim();
    console.log(nombreP);
    const xhr = new XMLHttpRequest(); //importacion del xml
    const url = `https://swapi.py4e.com/api/people/${nombreP}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const datos = JSON.parse(xhr.responseText);
                console.log(datos)
                let division = document.getElementById("resultados");
                division.innerHTML = `
                    <p>Name: <span>${datos.name}</span></p>
                    <p>Height: <span>${datos.height}</span></p>
                    <p>Mass: <span>${datos.mass}</span></p>
                    <p>Hair color: <span>${datos.hair_color}</span></p>
                    <p>Eye color: <span>${datos.eye_color}</span></p>
                    <p>Skin color: <span>${datos.skin_color}</span></p>
                    <p>Home World: <span>${datos.homeworld}</span></p>
                    <p>Films: <span>${datos.films}</span></p>  
                    `
                console.log(datos["name"]);
            } catch (error) {
                console.log("error");
            }
        }
    };
    xhr.send();
}