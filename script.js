import Typed from 'typed.js';

const navItems = document.querySelectorAll('.navItem');
const typed = document.querySelectorAll('.typed');

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

// typewriter effect
$(function () {
  $('.typed').typed({
    strings: ['app.', 'campaign.', 'video.', 'movement.', 'site.', 'brand.'],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 1,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: '|',
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
});
