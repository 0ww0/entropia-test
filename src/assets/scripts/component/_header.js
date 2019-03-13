(function() {
    var  $dataHeaderScroll = 'data-scroll';
    $win.scroll(function(){
        var $this = $(this),
            $topPos = $this.scrollTop(),
            $dataScroll = $('[' + $dataHeaderScroll + ']');

        if($topPos > 80){
            $dataScroll.attr($dataHeaderScroll, 'scroll')
        } else {
            $dataScroll.attr($dataHeaderScroll, '')
        }
    })

})();
