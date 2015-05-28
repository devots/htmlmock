var stickyOffset = $('.sticky').offset().top;

$(window).scroll(function(){
  var sticky= $('.sticky'),
      scroll = $(window).scrollTop();
    
  if (scroll >= stickyOffset) sticky.addClass('fixed_class');
  else sticky.removeClass('fixed_class');
  
  
});


$(function(){
 var shrinkHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.fixed_scroll').addClass('fixed_scroll_1');
		   $('.lower_header').addClass('lower_header1');
        }
        else {
            $('.fixed_scroll').removeClass('fixed_scroll_1');
			$('.lower_header').removeClass('lower_header1');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});


