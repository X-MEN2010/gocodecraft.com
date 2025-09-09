$(function () {
  $("#tech .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    margin: 40,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#security .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: ["<span><i class='fas fa-arrow-left'></i></span>"],
    navText: ["<span><i class='fas fa-arrow-right'></i></span>"],
    margin: 40,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#favourite .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    margin: 40,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
