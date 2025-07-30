function informacionP() {
    const nombreP = prompt("igresa el id del persoanje")
    const xhr = new XMLHttpRequest();
    const url = `http https://swapi.py4e.com/api/people/1/`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState === 4 && xhr.status == 200) {
                const datos = JSON.parse(xhr.responseText);
                console.log(datos.results);
                const box = document.getElementById(`box`);
                box.innerHTML = "";

                for (let pag = 0; pag < datos.results.length; pag++) {
                    const div = document.createElement("div");
                    div.innerHTML = `
                    <p>Name: <span>${datos.results[pag].name}</span></p>
                    <p>Height: <span>${datos.results[pag].height}</span></p>
                    <p>Mass: <span>${datos.results[pag].mass}</span></p>
                    <p>Hair color: <span>${datos.results[pag].hair_color}</span></p>
                    <p>Eye color: <span>${datos.results[pag].eye_color}</span></p>
                    <p>Skin color: <span>${datos.results[pag].skin_color}</span></p>
                    <p>Home World: <span>${datos.results[pag].homeworld}</span></p>
                    <p>Films: <span>${datos.results[pag].films}</span></p>
                    `;
                    box.appendChild(div);
                }
             } else {
                let cargando = document.createElement ("p");
                cargando.innerText = `Cargando.........`
             };

        } catch (error){
            console.log(`Error en la carga` + error)
        };
    };
            xhr.send();
    };
    
    