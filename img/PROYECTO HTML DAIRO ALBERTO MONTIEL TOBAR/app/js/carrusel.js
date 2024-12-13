const carousel = document.getElementById("carousel");
const indicators = document.getElementById("indicators");
const images = document.querySelectorAll("#carousel img");

let currentIndex = 0;
const intervalTime = 3000; // Tiempo entre imágenes (ms)

// Crear indicadores dinámicamente
images.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    if (index === 0) indicator.classList.add("active");
    indicators.appendChild(indicator);

    // Evento para ir a una imagen específica
    indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
    });
});

const updateCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Actualizar los indicadores
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
    });
};

// Cambiar automáticamente de imagen
const autoPlay = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
};

let interval = setInterval(autoPlay, intervalTime);

// Pausar al hacer hover
document.querySelector(".carousel-container").addEventListener("mouseenter", () => {
    clearInterval(interval);
});

document.querySelector(".carousel-container").addEventListener("mouseleave", () => {
    interval = setInterval(autoPlay, intervalTime);
});