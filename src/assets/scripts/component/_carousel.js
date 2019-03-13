(function() {

    $('.carousel .carousel-item[data-bg-src]').each(function() {
		var $this = $(this);

		$this.prepend([
			'<div class="fe-item-image" style="background-image: url(', $this.attr('data-bg-src'), ')"></div>'
		].join(''));
	});

})();
