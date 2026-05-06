function cardOnClick(name) {
    const img = document.getElementById("pokedex-img");
    const nombre = document.getElementById("detalle-nombre");
    if (name === "Bulbasaur") {
        img.src = "img/p-01.png";
        nombre.textContent = "Bulbasaur";
    }
    if (name === "Ivysaur") {
        img.src = "img/p-02.png";
        nombre.textContent = "Ivysaur";
    }
    if (name === "Venusaur") {
        img.src = "img/p-03.png";
        nombre.textContent = "Venusaur";
    }
    if (name === "Charmander") {
        img.src = "img/p-04.png";
        nombre.textContent = "Charmander";
    }
    if (name === "Charmeleon") {
        img.src = "img/p-05.png";
        nombre.textContent = "Charmeleon";
    }
    if (name === "Charizard") {
        img.src = "img/p-06.png";
        nombre.textContent = "Charizard";
    }
    if (name === "Squirtle") {
        img.src = "img/p-07.png";
        nombre.textContent = "Squirtle";
    }
    if (name === "Wartortle") {
        img.src = "img/p-08.png";
        nombre.textContent = "Wartortle";
    }
    if (name === "Blastoise") {
        img.src = "img/p-09.png";
        nombre.textContent = "Blastoise";
    }
}

