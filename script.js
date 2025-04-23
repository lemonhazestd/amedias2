document.addEventListener("DOMContentLoaded", function () {
    const categorias = document.querySelectorAll(".categoria");
    const enlaces = document.querySelectorAll("nav ul li a");
    const btnVolverArriba = document.getElementById("btn-volver-arriba");

    function mostrarCategoria(id) {
        categorias.forEach(cat => {
            cat.style.display = "none"; // Oculta todas las categorías
        });
        document.getElementById(id).style.display = "block"; // Muestra la seleccionada
    }

    // Manejar clic en los enlaces del menú
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el desplazamiento automático
            const categoriaId = this.getAttribute("href").substring(1);
            mostrarCategoria(categoriaId);
            history.pushState(null, null, `#${categoriaId}`); // Actualiza la URL
        });
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            btnVolverArriba.style.display = "block";
        } else {
            btnVolverArriba.style.display = "none";
        }
    });

    btnVolverArriba.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"  // Desplazamiento suave
        });
    });

    // Mostrar la primera categoría por defecto
    mostrarCategoria("soquetes");
});

// Lazy loading con IntersectionObserver
const lazyImages = document.querySelectorAll("img.lazy-img");

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Carga la imagen
            img.classList.remove("lazy-img"); // Quita la clase para evitar recarga
            observer.unobserve(img); // Deja de observar la imagen
        }
    });
}, {
    rootMargin: "100px" // Carga un poco antes de que aparezca
});

// Observamos todas las imágenes con la clase lazy-img
lazyImages.forEach(img => {
    imageObserver.observe(img);
});