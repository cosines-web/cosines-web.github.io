/* Handles the page being scrolled by ensuring the navigation is always in
 * view.
 */

$(function() {
  var nav = $('#navbar');
  var nav_height = nav.height();

  $('a[href*="#"]:not(a[href="#"])').click(function (event) {

      var is_this_page = (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
      if(!is_this_page) return;

      event.preventDefault();
      
      var scroll_to = $(this.hash).offset().top;
      if(scroll_to < 0)
        scroll_to = 0;

      $('html, body').animate({
          scrollTop: scroll_to
      }, 500); 
  });
});