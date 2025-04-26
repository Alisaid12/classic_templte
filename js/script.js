/* global $, alert, console */

$(function () {
  ("use strict");

  var myHeader = $(".header");
  var mySlider = $(".slider");

  myHeader.height($(window).height());

  $(window).resize(function () {
    myHeader.height($(window).height());
    // Adjust Bxlider List Item Center
    mySlider.each(function () {
      $(this).css(
        "paddingTop",
        ($(window).height() - $(".slider li").height()) / 2
      );
    });
  });

  // Links Add Active Class
  $(".links li a").click(function () {
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

  // Adjust Bxlider List Item Center
  mySlider.each(function () {
    $(this).css(
      "paddingTop",
      ($(window).height() - $(".slider li").height()) / 2
    );
  });

  // Trigger the Bx Slider
  mySlider.bxSlider({
    pager: false,
  });

  // Smoth Scroll To Div
  $(".links li a").click(function () {
    console.log("clicked");

    $("html,body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top,
      },
      1000
    );
  });

  // Our Auto  Slider Code
  (function autoSlider() {
    $(".Slider .active").each(function () {
      if (!$(this).is(":last-child")) {
        console.log("yes");
        $(this)
          .delay(3000)
          .fadeOut(1000, function () {
            $(this).removeClass("active").next().addClass("active").fadeIn();
            autoSlider();
          });
      } else {
        $(this).delay(3000).fadeOut(1000, function () {
          $(this).removeClass('active');
          console.log('hah')
          $('.Slider div').eq(0).addClass('active').fadeIn();
          autoSlider();
        });
      }
    });
  }());
});