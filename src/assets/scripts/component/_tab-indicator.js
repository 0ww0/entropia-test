(function(){

    $('#myTab li.nav-item').on('click', function(e){
        $(this).siblings().removeClass('active')
        $(this).addClass('active')
    });

    $('#myTab li.nav-item .nav-link').on('click', function(e){
        $('#myTabIndicator li .nav-link-indicator').not($(this).data('indicator')).removeClass('active')
        $('#myTabIndicator li .nav-link-indicator' + $(this).data('indicator')).addClass('active')
    });

})();
