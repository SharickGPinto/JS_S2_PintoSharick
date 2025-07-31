/*Consumo de API
Mediante XMLHttpRequest */

// Modularizar el consumo de api

function informacionP() {
    document.getElementById("resultados").innerHTML = ``;
    // const nombreP  

    const nombreP = document.getElementById("nombreInput").value.trim();
    console.log(nombreP);
    const xhr = new XMLHttpRequest(); //importacion del xml
    const url = `http https://swapi.py4e.com/api/people/1/${nombreP}`;
    console.log(url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 3) {

            console.log("Cargando...");
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const datos = JSON.parse(xhr.responseText);
                if (datos.results && datos.results.length > 0) {
                    for (let i = 0; i < datos.results.lengthM; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML += `
                    <p>Name: <span>${datos.results[i].name}</span></p>
                    <p>Height: <span>${datos.results[i].height}</span></p>
                    <p>Mass: <span>${datos.results[i].mass}</span></p>
                    <p>Hair color: <span>${datos.results[i].hair_color}</span></p>
                    <p>Eye color: <span>${datos.results[i].eye_color}</span></p>
                    <p>Skin color: <span>${datos.results[i].skin_color}</span></p>
                    <p>Home World: <span>${datos.results[i].homeworld}</span></p>
                    <p>Films: <span>${datos.results[i].films}</span></p>  
                    `
                        console.log(datos["results"][i]["name"]);
                    }
                }
            }catch (error) {
            console.log(err.message);
        }
            
            
        }
    };
    xhr.send();
}
