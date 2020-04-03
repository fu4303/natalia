var theSlide = 2,
  numSlides = 6,
  frequency = 5000,
  lastButton = '#quote-1';

var slide = function() {
  var currentSlide = '#quote-' + theSlide + '-content',
    lastSlide = lastButton + '-content',
    currentButton = '#quote-' + theSlide;

  $('.quote').removeClass('in-focus');
  $('.quote-control').removeClass('selected');
  $(currentSlide).addClass('in-focus');
  $(currentButton).addClass('selected');

  lastButton = currentButton;
  if (theSlide < numSlides) {
    theSlide += 1;
  } else {
    theSlide = 1;
  }
};

var interval = setInterval(slide, frequency);

$(function() {
  $('div.quoteSlider')
    .mouseover(function() {
      clearInterval(interval);
    })
    .mouseout(function() {
      interval = setInterval(slide, frequency);
    });

  $('.quote-control').click(function(e) {
    clearInterval(interval);
    $('.quote').removeClass('in-focus');
    $('.quote-control').removeClass('selected');
    var quoteSlider = '#' + $(this).attr('id') + '-content';
    $(quoteSlider).addClass('in-focus');
    $(this).addClass('selected');
    $('div.quoteSlider').unbind('mouseover mouseout');
  });
});
