function informacionP() {
    document.getElementById("resultados").innerHTML = ``;

    const nombreP = document.getElementById("nombreInput").value.trim();
    console.log(nombreP);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api/ca4c752a3aac881d5bb269f1aa297311/search${nombreP}`;
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
                <p>Id: <span>${datos.id}</span></p>
                <p>POWERS: <span>${datos.powerstats}</span></p>
                <p>BIOGRAPHY: <span>${datos.biography}</span></p>
                <p>APARENCE: <span>${datos.appearance}</span></p>
                `
                console.log(datos["name"]);
            }catch (error) {
                console.log("error");
            }
        }
    };
    xhr.send();
}
