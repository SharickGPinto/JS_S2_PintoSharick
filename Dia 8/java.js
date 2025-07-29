function informacionP(){

    const nombreP = prompt ("igresa el id del persoanje")
    const xhr = new XMLHttpRequest();
    const url = `http https://swapi.py4e.com/api/people/1/${id}`;
    console.log (url)
    xhr.open ("GET", url, true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 3){
            console.log ("Cargando....")
        }
        else if (xhr.readyState === 4 && xhr.status == 200){
            try{
                const datos = JSON.parse(xhr,this.responseText)
                console.log ("El persoanje es:" +datos ["results"][0]["id"])
            }
            catch(err){
                console.log (err.messaje);
            }
        }
    };
    xhr.send();
}