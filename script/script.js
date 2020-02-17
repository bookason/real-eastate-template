$(document).ready(function(){

$('.hamburger').click(function (){
    $('.nav-menu').toggleClass('change');

});


//Nav on scroll

$(window).on( "load scroll", function (){

let position = $(window).scrollTop();
console.log(position);

if(position>=475){
    $('.hero').addClass('scroll');
}
else{
    $('.hero').removeClass('scroll');
}

});


//Filtering function

$('.filter-item').click(function(){

let filterValue = $(this).attr('data-filter');

if (filterValue === 'all'){
    
     $('.filter').show(250);
} else{
    $('.filter').not('.' + filterValue).hide(450);
    $('.filter').filter('.' + filterValue).show(450);
}

});


$('.filter-item').click(function(){
    $(this).addClass('active-filter').siblings().removeClass('active-filter');
})

});