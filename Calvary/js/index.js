
$(document).ready(function(){

$nav = $('.nav');
$toggleCollapse = $('.toggle-collapse');

// clicked event
$toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
})

});

