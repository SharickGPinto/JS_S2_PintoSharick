function buscarPersonajes() {
    document.getElementById("resultados").innerHTML = ``

    const nombreUsar = document.getElementById("nombreInput").value;
    console.log(nombreUsar)
    const xhr = new XMLHttpRequest(); //la importancion
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`;
    console.log(url);
    xhr.open("GET", url);

    xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
        try {
            let daticos = JSON.parse(xhr.responseText);
            console.log(daticos)
            if (daticos.results && daticos.results.length > 0); {
                for (let i = 0; i < daticos.results.length; i++) {
                    let division = document.getElementById("resultados");
                    division.innerHTML = `
                        <div class = "personajes">
                        <img src="${daticos["results"][i]["image"]["url"]}">
                        <h3>${daticos["results"][i]["name"]}</h3>
                        <p><strong>ID:</strong>${daticos["results"][i]["id"]}</p>
                        <h3>${daticos["results"][i]["Status"]}</h3>
                        <h3>${daticos["results"][i]["Specie"]}</h3>
                        </div>`
                        console.log(daticos)
                };
            }
        }catch (error) {
            console.log(err.message); //Si hay algo malo pasa
        }
    }

};
xhr.send();
}



