$(function(){
    $('.animals').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        speed: 500,
        dots: true,

/*--------レスポンシブ----------*/        
        responsive: [{
             breakpoint: 768,
                settings: {
                slidesToShow:2,
                vertical:true,
             }
        }]
    });

});