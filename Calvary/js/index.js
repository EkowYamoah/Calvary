const responsive =  {
    0:{
        items:1
    },
    320:{
        items:1
    },
    520:{
        items: 2
    },
    960:{
        items:3
    }
}

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
    autoplay:false,
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
});

//scrol to top function
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    
    }, 1000);
})

// Animation On Scroll
AOS.init();

});

