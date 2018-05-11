$('.jarallax').jarallax({
    speed: 0.2
});

$( document ).ready(function() {
  if ($(window).width() > 479 && $(window).width() < 2000){
    $( document ).ready(function() {
      $('.jarallax-img').css('top', '-50px');
    });
    $(window).scroll(function() {
      $('.jarallax-img').css('top', '-50px');
    });
  } 
  else if ($(window).width() > 2000 ){
    $( document ).ready(function() {
      $('.jarallax-img').css('top', '-100px');
    });
    $(window).scroll(function() {
      $('.jarallax-img').css('top', '-100px');
    });
  }
  else {
    $( document ).ready(function() {
      $('.jarallax-img').css('top', '0px');
    });
    $(window).scroll(function() {
      $('.jarallax-img').css('top', '0px');
    });
  }
});


$(window).on('resize', function(){
  if ($(window).width() > 479 && $(window).width() < 2000){
    $( document ).ready(function() {
      $('.jarallax-img').css('top', '-50px');
    });
    $(window).scroll(function() {
      $('.jarallax-img').css('top', '-50px');
    });
  } 
  else if ($(window).width() > 2000 ){
    $( document ).ready(function() {
      $('.jarallax-img').css('top', '-100px');
    });
    $(window).scroll(function() {
      $('.jarallax-img').css('top', '-100px');
    });
  }
  else {
    $( document ).ready(function() {
      $('.jarallax-img').css('top', '0px');
    });
    $(window).scroll(function() {
      $('.jarallax-img').css('top', '0px');
    });
  }
});

$( document ).ready(function() {
  $('.jarallax').css('z-index', 'unset');
});
$(window).scroll(function() {
  $('.jarallax').css('top', 'unset');
});

//collapse the navbar upon selection from hamburger menu
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(document).ready(function () {
    // bind click event to all internal page anchors
    $('a[href*="#"]').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity("scroll", 1000);
    });
});