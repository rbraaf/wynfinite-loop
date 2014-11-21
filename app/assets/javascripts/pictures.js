// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('ready page:load', function(){
  
  var $container = $('#container');
    // initialize Masonry after all images have loaded  
    $container.imagesLoaded( function() {
      $container.masonry();
  });

  $('#container').masonry({
    columnWidth: 1,
    itemSelector: '.item',
    isAnimated: true,
    "gutter": 50
  });

  $('.options').hide( function(){
    $('.item' ).on('mouseenter', function(){
      $(this).find('.options').fadeIn();
    });

    $('.item').on('mouseleave', function(){
      $(this).find('.options').fadeOut();
    });
  });
});
