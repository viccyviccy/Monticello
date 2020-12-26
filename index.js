// slick slider
jQuery(document).ready(function($){

$('.multiple-items').slick({
  infinite: false,
  dots: true,
  customPaging : function(slider, i) {
    const thumb = $(slider.$slides[i]).data('thumb');
    return '<a class="dot"></a>';
},
  slidesToScroll: 3,
  slidesToShow: 3,
  adaptiveHeight: true,
  autoplay: true,
  mobileFirst:true,
  arrows:true,
  nextArrow: '<div class="next_arrow"></div>',
  prevArrow: '<div class="prev_arrow"> </div>',
  swipe: true,
  touchMove: true,

});

//  ------- SCROOLLING -------

// $("#fullpage").fullpage({
//   navigation: false,
//   onLeave: function(origin, destination, direction) {
//     if (direction == "down") {
//       $carousel.slick("slickNext");
//     } else if (direction == "up") {
//       $carousel.slick("slickPrev");
//     }
//   }
// });
//  ----------- SCROOLLING END ----------

});

$(document).ready(function() {
	$('#fullpage').fullpage({
    //options here
    anchors:['monticello','what-we-do', 'project1', 'project2', 'reviews', 'gallery', 'contacts'],
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});
