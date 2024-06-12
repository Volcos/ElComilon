console.log("ayuda por favor");

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1284:{
            items:3
        },
        1300:{
            items:4
        }
    }
})
var owl = $('.owl-carousel');
owl.owlCarousel();
$('.r').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.l').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})
