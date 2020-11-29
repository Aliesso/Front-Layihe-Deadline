$(".tabMenu button").click(function() {
    const ind = $(this).index()
    $(".tabMenu .destination ").stop().slideUp()
    $(".tabMenu .destination").eq(ind).stop().slideDown()
})
$(".tabMenu button").click(function() {
    $(".tabMenu button").css({
        background: "#1A2B48",
        color: "#ffffff"
    })
    $(this).css({
        background: " #5191Fa",
        color: "#fffff"
    })
})
$("#slider").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,


            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1

            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
})