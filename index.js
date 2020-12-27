// slick slider
jQuery(document).ready(function($){

$('.multiple-items').slick({
  infinite: false,
  dots: true,
  customPaging : function(slider, i) {
    const thumb = $(slider.$slides[i]).data('thumb');
    return '<a class="dot"></a>';
},
  slidesToScroll: 1,
  slidesToShow: 3,
  autoplaySpeed: 4000,
  speed: 2000,
  adaptiveHeight: true,
  autoplay: true,
  infinite: true,
  mobileFirst:true,
  arrows:true,
  nextArrow: '<div class="next_arrow"></div>',
  prevArrow: '<div class="prev_arrow"> </div>',
  swipe: true,
  touchMove: true,

});
});


//  ------- SCROOLLING -------


$(document).ready(function() {
	$('#fullpage').fullpage({
    //options here
    anchors:['monticello','what-we-do', 'project', 'reviews', 'gallery', 'contacts'],
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

// google maps

function initMap() {
  const myLatLng = {
    lat: 40.6725,
    lng: -73.9681
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
    fullscreenControl: true,
    zoomControl: true,
    scrollwheel: false,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Monticello"
  });
};
