(function(){

    var $dp = ($(window).width() < 1025),
        $md = ($(window).width() < 801),
        $sm = ($(window).width() < 641),
        $xs = ($(window).width() < 481);

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                if($dp){
                    $('html, body').animate({
                        scrollTop: target.offset().top - 75
                    }, 1000);
                }
                else if($md){
                    $('html, body').animate({
                        scrollTop: target.offset().top - 82
                    }, 1000);
                }
                else if($sm){
                    $('html, body').animate({
                        scrollTop: target.offset().top - 82
                    }, 1000);
                }
                else if($xs){
                    $('html, body').animate({
                        scrollTop: target.offset().top - 75
                    }, 1000);
                }
                else{
                    $('html, body').animate({
                        scrollTop: target.offset().top - 82
                    }, 1000);
                }
            }
        }
    });
    $(window).on('resize', function(e){
        $dp = ($(window).width() < 1025);
        $md = ($(window).width() < 801);
        $sm = ($(window).width() < 641);
        $xs = ($(window).width() < 481);
    });
})();

(function(){
    $(document).ready(function() {
        $('html, body').hide();

        if (window.location.hash) {
            setTimeout(function() {
                $('html, body').scrollTop(0).show();
                $('html, body').animate({
                    scrollTop: $(window.location.hash).offset().top - 72
                    }, 1000)
            }, 0);
        }        else {
            $('html, body').show();
        }
    });
})();
