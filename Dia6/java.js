function getCaracters(done){

    let results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then (Response => Response.json())
        .then(data => {
        done(data)
    });
}

getCaracters (data => {

    data.results.forEach(personaje => {

     let article = document.createRange().createContextualFragment(
       <article>

        <div class="image-container">
        <img src="${personaje.image}" alt="Personaje">
        </div>


    <h2>${personaje.name}</h2>
    <span>${personaje.status}</span>

    </article>
    );


        let main = document.querySelector("main");
        
        main.append(article);
});

});