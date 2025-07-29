/* CONSUMO DE APLI
MEDIANTE XMLHttpRequest*/

/*Modularizar el consumo de la api*/

function buscarPersonajes (){

    const nombreUsar = prompt ("ingresar el nombre del personaje") 
    const xhr = new XMLHttpRequest(); //la importancion
    const url =`https://rickandmortyapi.com/api/character`
    console.log(url)
    xhr.open ("GET", url, true);
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 3){
            alert ("CARGANDO...")
        }
        else if(xhr.readyState=== 4 && xhr.status === 200){
            try{

                const daticos = JSON.parse(xhr.responseText)
                alert ("el personaje es:"+daticos["results"][0]["name"]+"Status"+daticos ["results"][0]["status"]+ "Specie"+daticos["results"][0]["species"]);
                
            }

            catch (err){
                console.log (err.message); //Si hay algo malo pasa
            }
        }

    };
    xhr.send();  


}

buscarPersonajes();