$('document').ready(() => {

    // Initializing the carousel.
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    // Initializing the search box
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });

    // Scrolling to the about section.
    $('#btn-about').on('click', () => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top
        }, 500);
    });

    // Detecting scrolling behavior.
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 600) {
            $('#scroll-to-top').fadeIn(500);
        } else {
            $('#scroll-to-top').fadeOut(500);
        }
    });

    // The scroll-to-top button press event.
    $('#scroll-to-top').on('click', () => {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
    });
});
