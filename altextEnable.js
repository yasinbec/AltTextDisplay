if($('.altTextDisplay').length <= 0) {
	$.each($('img'), function (i,e) {
		// Get alt text
		var altText = $(this).attr('alt');

		// Get Position of the image
		// var imgLeft = $(e).offset().left;
		// var imgTop = $(e).offset().top;

		// Create Element
		if(altText !== '' && altText !== undefined ) {
			var altTextDisplay = '<div class="altTextDisplay">Alt Text : '+altText+'</div>';
		} else {
			var altTextDisplay = '<div class="altTextDisplay no-altText">Missing Alt Text</div>';
		}

		// Add to each image
		$(altTextDisplay).insertAfter($(this));

		// Apply position
		//$('.altTextDisplay').css({'top':imgTop, 'left':imgLeft });

		// Show 
		$('.altTextDisplay').show();
	});
} else {
	// Show 
	$('.altTextDisplay').show();
}