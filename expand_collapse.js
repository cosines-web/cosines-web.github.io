$(function() {
	// BUG: currently it's possible to make two things show at once if determined...
	$('a[data-research-toggle]').click(function() {
		var target = $(this).data('target');
		var shown = $('.research-collapse.show');
		if(shown.attr('id') == target) return;
		if(shown.length == 0) {
			$('#' + target).collapse('show');
			return;
		}

		shown.collapse('hide');
		shown.one('hidden.bs.collapse', function() {
			$('#' + target).collapse('show');
		});

	});
});