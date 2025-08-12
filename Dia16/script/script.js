document.addEventListener('DOMContentLoaded', () => {
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');

    async function fetchData() {
        const res = await fetch('https://689a16c7fed141b96ba1d279.mockapi.io/tarea');
        data = await res.json();
        return data;
    }
    //console.log()
    function displayCapsula(capsula){
        datosContenedor.innerHTML='';
        capsula.forEach(cap =>{
            const capDiv = document.createElement('div')
            if(cap.status==="ready"){
                capDiv.classList.add('capsulaNegativa');
                capDiv.innerHTML =`
                <div class="infoTextNegativo">
                <p>${cap["task"]}</p>
            </div>
            <div class="botones">
                <div class="terminadoNegativo">
                    <img src="./fonts/storage/img/pngwing.com (2).png" alt="">
                </div>
                <div class="eliminadoNegativo">
                    <img src="./fonts/storage/img/pngwing.com (4).png" alt="">
                </div>
            </div>
                `
            }else if(cap.status==="On hold"){
                capDiv.classList.add('capsula');
                capDiv.innerHTML=`
                 <div class="capsula">
            <div class="infoText">
                <p>${cap["task"]}</p>
            </div>
            <div class="botones">
                <div class="terminado">
                    <img src="./fonts/storage/img/pngwing.com (2).png" alt="">
                </div>
                <div class="eliminado">
                    <img src="./fonts/storage/img/pngwing.com (4).png" alt="">
                </div>
            </div>`
            }
            datosContenedor.appendChild(capDiv);
        });
    }
    fetchData().then(data =>{
        displayCapsula(data);
    })
});