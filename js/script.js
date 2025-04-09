/* global $, alert, console */

$(function () {
    
    'use strict';

    var myHeader = $('.header');    
    var mySlider = $(".slider")
        
        
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
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
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
});