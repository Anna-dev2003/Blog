
$('.carousel').slick({
    autoplay: true,
    slidesToShow: 2,
})

$('.how-works--block').on('click', function(){
    $(this).children('.how-works--block-text').slideToggle(300);;
})
