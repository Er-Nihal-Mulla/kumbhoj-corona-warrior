"use strict";

$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });
  $(window).on("load scroll", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 0) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }

    if ($(window).scrollTop() > 0) {
      $(".scroll-top").show();
    } else {
      $(".scroll-top").hide();
    } // scroll spy


    $("section").each(function () {
      var top = $(window).scrollTop();
      var offset = $(this).offset().top - 200;
      var id = $(this).attr("id");
      var height = $(this).height();

      if (top > offset && top < offset + height) {
        $(".navbar a").removeClass("active");
        $(".navbar").find("[href=\"#".concat(id, "\"]")).addClass("active");
      }
    });
  }); // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    }, 500, "linear");
  });
});
//# sourceMappingURL=menu.dev.js.map
