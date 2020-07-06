// carousel 1 
$(document).ready(function() {
    $('#carouselFunction').carousel({ interval: 5000 });
    $('[data-toggle="tooltip"]').tooltip();
});

// Carousel 2 
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
      next=$(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});