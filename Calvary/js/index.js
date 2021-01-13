
$(document).ready(function(){

$nav = $('.nav');
$toggleCollapse = $('.toggle-collapse');

// clicked event
$toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
})

//Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
});

//scrol to top function
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    
    }, 1000);
})

});

