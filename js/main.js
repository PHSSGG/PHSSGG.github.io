(function ($) {
  "use strict";

  $(window).on('load', function () {
    if ($('#loading').length) {
      $('#loading').delay(1000).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  new WOW().init();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 50) {
    $('#header').addClass('header-scrolled');
  }


  $(document).ready(function () {
    const $navItems = $('.main-nav ul li');
    const $sections = $('section');

    function isSectionVisible(section) {
      const rect = section.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= 0;
    }

    function updateActiveNavItem() {
      $sections.each(function (index, section) {
        if (isSectionVisible(section)) {
          $navItems.removeClass('active');

          if ($(window).scrollTop() <= 30) {
            $navItems.eq(0).addClass('active');
          } else {
            $navItems.eq(index).addClass('active');
          }
        }
      });
    }

    $(window).scroll(updateActiveNavItem);
    $(window).on('load', updateActiveNavItem);
  });

})(jQuery);

const dropdownButton = document.querySelector('.resume-button');
const resumeMenu = document.querySelector('.resume-menu');

dropdownButton.addEventListener('click', function () {
  resumeMenu.classList.toggle('show');
});

document.addEventListener('click', function (event) {
  if (!event.target.matches('.resume-button')) {
    resumeMenu.classList.remove('show');
  }
});