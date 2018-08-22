function eq_height() {
	var to_eq = $('*[data-eq-group]');
	to_eq.each(function() {
		var items = $("*[data-eq-height]", this);
		items.css('height', null)
		var height = Math.max.apply(null, items.map(total_height));
		items.height(height);
	});
}

function total_height() {
	var totalHeight = 0;

	$(this).children().each(function(){
	    totalHeight = totalHeight + $(this).outerHeight(true);
	});
	return totalHeight
}
$(eq_height);
$(window).resize(eq_height);
