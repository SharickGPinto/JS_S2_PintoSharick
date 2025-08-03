function cartas(done) {
    document.getElementById("cartas").innerHTML = ``;

    const carticas = fetch("https://deckofcardsapi.com/static/img/back.png");

    carticas
        .then(response => response.json())
        .then(datos => {
            done(datos)

        });

    cartas(datos => {
        datos.results.ForEach(baraja => {
            const article = document.createRange().createContextualFragment(`
    <article>
        <main>
            <div class="cartas">
                <img src="${baraja.image}" alt="Memory Game">
            </div>
        </main>
    </article>
                `
            );
          const main = document.querySelector("main")
          
          main.append(article);
        });
    });

}