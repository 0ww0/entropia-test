(function(){

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
            }
        }
    });
    $(window).on('resize', function(e){
        // $dp = ($(window).width() < 1025);
        // $md = ($(window).width() < 801);
        // $sm = ($(window).width() < 641);
        // $xs = ($(window).width() < 481);
    });
})();
