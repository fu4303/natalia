var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  // console.log({ i });
  var fullTxt = this.toRotate[i];
  // console.log({ fullTxt });

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else if (this.txt === 'app.' || 'campaign.') {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  } else {
    this.txt = 'brand.';
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta / 2);
};

window.onload = function() {
  var elements = document.getElementsByClassName('textRotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    console.log('length: ', toRotate.valueOf());
    var period = elements[i].getAttribute('data-period');
    console.log('period: ', period);
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
      console.log(JSON.parse(toRotate));
    }
  }
  // INJECT CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.textRotate > .wrap { border-right: 0.08em solid #666 }';
  document.body.appendChild(css);
};

const navItems = document.querySelectorAll('.navItem');

$('nav')
  .find('.pageLink')
  .click(function(e) {
    // menuButton.classList.remove('close');
    // menu.classList.remove('show');
    // menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
    let section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top - 75
    });
  });
