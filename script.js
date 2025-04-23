document.addEventListener("DOMContentLoaded", function () {
    const btnVolverArriba = document.getElementById("btn-volver-arriba");

    // Manejar el scroll para mostrar/ocultar el botón "volver arriba"
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            btnVolverArriba.style.display = "block";
        } else {
            btnVolverArriba.style.display = "none";
        }
    });

    // Función para el botón "volver arriba"
    btnVolverArriba.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"  // Desplazamiento suave
        });
    });
});
