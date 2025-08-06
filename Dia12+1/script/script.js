function informacionP() {
    document.getElementById("resultados").innerHTML = ``;

    const nombreP = document.getElementById("nombreInput").value;
    console.log(nombreP);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/ca4c752a3aac881d5bb269f1aa297311/search/${nombreP}`;
    console.log(url);
    xhr.open(`GET`, url);

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                let datos = JSON.parse(xhr.responseText);
                console.log(datos)
                if (datos.results && datos.results.length > 0); {
                    for (let i = 0; 1 < datos.results.length; i++) {
                        let division = document.getElementById("resultados");
                        division.innerHTML = `
                        <div class = "heroues">
                        <img src="${datos["results"][i]["image"]["url"]}">
                        <h3>${datos["results"][i]["name"]}</h3>
                        <p><strong>ID:</strong>${datos["results"][i]["id"]}</p>
                        </div>`
                        console.log(datos);
                    };
            }
            }
            catch (error) {
                console.log("error");
            }
        }
    };
    xhr.send();

}
