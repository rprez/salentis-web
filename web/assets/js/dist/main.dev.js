"use strict";

/**
* Template Name: MyBiz - v2.1.0
* Template URL: https://bootstrapmade.com/mybiz-free-business-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!function ($) {
  "use strict"; // Smooth scroll for the navigation menu and links with .scrollto classes

  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      if (target.length) {
        e.preventDefault();
        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;
      }
    }
  }); // Activate smooth scroll on page load with hash links in the url

  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;

      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  }); // Mobile Navigation

  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      "class": 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');
    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });
    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  } // Navigation active state on scroll


  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop() + 200;
    nav_sections.each(function () {
      var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }

        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }

      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
      }
    });
  }); // Toggle .header-scrolled class to #header when page is scrolled

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } // Stick the header at top on scroll


  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  }); // Intro carousel

  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
    index === 0 ? heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>") : heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });
  heroCarousel.on('slid.bs.carousel', function (e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  }); // Back to top button

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  }); // jQuery counterUp

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  }); // Porfolio isotope and filter

  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    }); // Initiate venobox (lightbox feature used in portofilo)

    $(document).ready(function () {
      $('.venobox').venobox();
    });
  }); // Testimonials carousel (uses the Owl Carousel library)

  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  }); // Portfolio details carousel

  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
}(jQuery); //Maquina de escribir

function maquina(contenedor, texto, intervalo) {
  // Calculamos la longitud del texto
  longitud = texto.length; // Obtenemos referencia del div donde se va a alojar el texto.

  cnt = document.getElementById(contenedor);
  var i = 0; // Creamos el timer

  timer = setInterval(function () {
    // Vamos a??adiendo letra por letra y la _ al final.
    cnt.innerHTML = cnt.innerHTML.substr(0, cnt.innerHTML.length - 1) + texto.charAt(i) + "_"; // Si hemos llegado al final del texto..

    if (i >= longitud) {
      // Salimos del Timer y quitamos la barra baja (_)
      clearInterval(timer);
      cnt.innerHTML = cnt.innerHTML.substr(0, longitud);
      return true;
    } else {
      // En caso contrario.. seguimos
      i++;
    }
  }, intervalo);
}

;
jQuery(function ($) {
  $('a.sywh-open-services').click(function () {
    if ($('.sywh-services').hasClass('active')) {
      $('.sywh-services').removeClass('active');
      $('a.sywh-open-services i.fa-times').hide();
      $('a.sywh-open-services i.fa-comments').show();
      $('a.sywh-open-services').removeClass('data-tooltip-hide');
      $('.sywh-services a:nth-child(1)').delay(0).fadeOut();
      $('.sywh-services a:nth-child(2)').delay(100).fadeOut();
      $('.sywh-services a:nth-child(3)').delay(200).fadeOut();
      $('.sywh-services a:nth-child(4)').delay(300).fadeOut();
      $('.sywh-services a:nth-child(5)').delay(400).fadeOut();
    } else {
      $('.sywh-services').addClass('active');
      $('a.sywh-open-services i.fa-comments').hide();
      $('a.sywh-open-services i.fa-times').show();
      $('a.sywh-open-services').addClass('data-tooltip-hide');
      $('.sywh-services a:nth-child(5)').delay(0).fadeIn();
      $('.sywh-services a:nth-child(4)').delay(100).fadeIn();
      $('.sywh-services a:nth-child(3)').delay(200).fadeIn();
      $('.sywh-services a:nth-child(2)').delay(300).fadeIn();
      $('.sywh-services a:nth-child(1)').delay(400).fadeIn();
    }
  });
});
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});
var datanum = 0;
var $popimg = $('#popimg');
var imgclone = $(".light-img").clone();
$('document').ready(function () {
  $('.light-img').click(function () {
    datanum = $(this).data('num');
    var imgsrc = $(this).attr('src');
    $('#popup').fadeIn(800);
    $popimg.attr('src', imgsrc);
    $('#popup').css('display', 'block');
  });
});
$('#prev').click(function () {
  --datanum;

  if (datanum < 0) {
    datanum = imgclone.length - 1;
  }

  $popimg.slideDown(3000);
  $popimg.attr('src', imgclone[datanum].src);
});
$('#next').click(function () {
  ++datanum;

  if (datanum > 9) {
    datanum = imgclone.length - 10;
  }

  $popimg.attr('src', imgclone[datanum].src);
});
$('#close').click(function () {
  $('#popup').css('display', 'none');
});
$(document).ready(function () {
  $('.video-gallery').magnificPopup({
    delegate: 'a',
    type: 'iframe',
    gallery: {
      enabled: true
    }
  });
});