(function() {

    var $copyYear = $('.js-copy-years');
    var $year = '2018';
    var $currentYear = new Date().getFullYear();

    if($currentYear > $year){
        $copyYear.html($year + ' - ' + $currentYear);
    } else {
        $copyYear.html($currentYear);
    }

})();
