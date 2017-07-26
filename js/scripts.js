$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});