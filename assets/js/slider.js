document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
      loop: true,  // Défilement infini
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      slidesPerView: 1, // Afficher un projet à la fois
      spaceBetween: 10, // Espacement entre les slides
      autoplay: {
          delay: 3000, // Temps en millisecondes (ici 3 secondes)
          disableOnInteraction: false, // Continue même après interaction
      },
  });
});
