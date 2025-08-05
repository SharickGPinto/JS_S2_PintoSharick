function informacionP() {
    document.getElementById("resultados").innerHTML = ``;

    const nombreP = document.getElementById("nombreInput").value;
    console.log(nombreP);
    const xhr = new XMLHttpRequest();
    const url = `https://superheroapi.com/api.php/ca4c752a3aac881d5bb269f1aa297311/search/${nombreP}`;
    console.log(url);
    xhr.open(`GET`, url,true);

    xhr.onreadystatechange = ()=>{
        console.log("holi")
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const datos = JSON.parse(xhr.responseText);
                console.log(datos)
                let division = document.getElementById("resultados");
                division.innerHTML = `
                <p>Name: <span>${datos.results}</span></p>
                `
                console.log(datos["name"]);
            } catch (error) {
                console.log("error");
            }
        }
    }
    xhr.send();
    
}
