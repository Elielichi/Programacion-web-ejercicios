function ImagenOnClick(name) {
    const imagen = document.getElementById("banner");
    if (name === "Saros") {

    }
    if (name === "Pragmata") {
        imagen.src = "/imagenes/pregunta1/img/pragmata-banner.jpg";
    }
    if (name === "Assassin Creed") {
        imagen.src = "/imagenes/pregunta1/img/banner-principal.jpeg";
    }
    if (name === "Diablo IV") {
        imagen.src = "/imagenes/pregunta1/img/diabloiv-banner.jpg";
    }
    if (name === "Día del niño") {
        imagen.src = "/imagenes/pregunta1/img/dia_nino-banner.jpg";
    }

}