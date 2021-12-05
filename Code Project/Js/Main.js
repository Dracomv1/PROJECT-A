document.addEventListener('DOMContentLoaded', () => {
    const carouselElements = document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElements, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 50,
        numVisible: 5,
        indicators: true,
        noWrap: false
    });    
});

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
});