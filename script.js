//import { Typed } from 'typed.js';

const navItems = document.querySelectorAll('.navItem');
// const typed = document.querySelectorAll('.typed');

$('nav')
  .find('.pageLink')
  .click(function (e) {
    // menuButton.classList.remove('close');
    // menu.classList.remove('show');
    // menuNav.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));
    showMenu = false;
    let section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top - 75,
    });
  });
