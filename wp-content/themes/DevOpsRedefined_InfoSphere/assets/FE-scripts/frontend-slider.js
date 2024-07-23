// jQuery(document).ready(function ($) {
//   console.log("HERE");
//   console.log($(".slick-slider"));
//   $(".slick-slider").slick();
// });

jQuery(document).ready(function ($) {
  // $(".slick-slide").slick("setPosition");

  $(".slick-slider").slick({
    // slidesToShow: 3,
    // dots: false,
    // centerMode: true,
    // arrows: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    autoplay: false,
  });

  $(".prev-btn").click(function () {
    $(".slick-slider").slick("slickPrev");
  });

  $(".next-btn").click(function () {
    $(".slick-slider").slick("slickNext");
  });
  $(".prev-btn").addClass("slick-disabled");
  $(".slick-slider").on("afterChange", function () {
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".prev-btn").addClass("slick-disabled");
    } else {
      $(".prev-btn").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
      $(".next-btn").addClass("slick-disabled");
    } else {
      $(".next-btn").removeClass("slick-disabled");
    }
  });
});
