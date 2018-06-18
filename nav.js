/* Handles the page being scrolled by ensuring the navigation is always in
 * view.
 */

$(function() {
  var nav = $('#navbar');
  var nav_height = nav.height();

  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      
      var scroll_to = $($(this).attr('href')).offset().top - nav_height - 20;
      if(scroll_to < 0)
        scroll_to = 0;

      $('html, body').animate({
          scrollTop: scroll_to
      }, 500); 
  });
});