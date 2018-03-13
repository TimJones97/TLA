/* Scroll Postion for CSS Animations */
var safariOrEdge = false;

/*----------------------------------------------------------------------------------*/
(function() {
  $( document )
    .on( "mousemove", ".snapshot-aml", function( event ) {

    var elmnt = document.getElementById("snapshot");

    var halfW = ( elmnt.clientWidth / 2 );
    var halfH = ( elmnt.clientHeight / 2 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );
    var degX, degY;
  // if($(window).width() > 2000 && $(window).height() > 1000){
  //   degX  = ( ( coorY / halfH ) * 20 ) + 'deg'; // max. degree = 10
  // }
  // if(safariOrEdge && $(window).width() > 2000 && $(window).height() > 1000){
  //   degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
  // }
    degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
    degY  = ( ( coorX / halfW ) * -2 ) + 'deg'; // max. degree = 10
    // $('.snapshot-aml').css( 'transform', function() {

    //   return 'perspective( 1000px ) translate3d( 0, 0px, 50px ) rotateX('+ degX +') rotateY('+ degY +')';
    // } );
    $('.aml-description').css( 'color', 'black');
  } )
    .on( "mouseout", ".snapshot", function() {
    // $('.snapshot-aml').removeAttr( 'style' )
    $('.aml-description').removeAttr( 'style' )
  } );
})();
/*----------------------------------------------------------------------------------*/
(function() {
  $( document )
    .on( "mousemove", ".snapshot-atlin", function( event ) {

    var elmnt = document.getElementById("snapshot");

    var halfW = ( elmnt.clientWidth / 2 );
    var halfH = ( elmnt.clientHeight / 2 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );
    var degX, degY;
  // if($(window).width() > 2000 && $(window).height() > 1000){
  //   degX  = ( ( coorY / halfH ) * 20 ) + 'deg'; // max. degree = 10
  // }
  // if(safariOrEdge && $(window).width() > 2000 && $(window).height() > 1000){
  //   degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
  // }
    degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
    degY  = ( ( coorX / halfW ) * -2 ) + 'deg'; // max. degree = 10
    // $('.snapshot-aml').css( 'transform', function() {

    //   return 'perspective( 1000px ) translate3d( 0, 0px, 50px ) rotateX('+ degX +') rotateY('+ degY +')';
    // } );
    $('.atlin-description').css( 'color', 'black');
  } )
    .on( "mouseout", ".snapshot", function() {
    // $('.snapshot-aml').removeAttr( 'style' )
    $('.atlin-description').removeAttr( 'style' )
  } );
})();
/*----------------------------------------------------------------------------------*/
(function() {
  $( document )
    .on( "mousemove", ".snapshot-carrard", function( event ) {

    var elmnt = document.getElementById("snapshot");

    var halfW = ( elmnt.clientWidth / 2 );
    var halfH = ( elmnt.clientHeight / 2 );
    var coorX = ( halfW - ( event.pageX - elmnt.offsetLeft ) );
    var coorY = ( halfH - ( event.pageY - elmnt.offsetTop ) );
    var degX, degY;
  // if($(window).width() > 2000 && $(window).height() > 1000){
  //   degX  = ( ( coorY / halfH ) * 20 ) + 'deg'; // max. degree = 10
  // }
  // if(safariOrEdge && $(window).width() > 2000 && $(window).height() > 1000){
  //   degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
  // }
    degX  = ( ( coorY / halfH ) * 10 ) + 'deg'; // max. degree = 10
    degY  = ( ( coorX / halfW ) * -2 ) + 'deg'; // max. degree = 10
    // $('.snapshot-aml').css( 'transform', function() {

    //   return 'perspective( 1000px ) translate3d( 0, 0px, 50px ) rotateX('+ degX +') rotateY('+ degY +')';
    // } );
    $('.carrard-description').css( 'color', 'black');
  } )
    .on( "mouseout", ".snapshot", function() {
    // $('.snapshot-aml').removeAttr( 'style' )
    $('.carrard-description').removeAttr( 'style' )
  } );
})();

