	
function setBgColor(){
	document.getElementsByTagName('body')[0].style.backgroundColor = '#FFFFFF';
}

setBgColor();

$(document).ready(function(){
	// $('.more').click(function() {
	// 	$(this).siblings('.more-text').slideToggle(500);
	// 	if ( $(this).attr('src') == 'img/more-button.png' ) {
	// 		$(this).attr('src', 'images/less-button.png');
	// 	}
	// 	else {
	// 		$(this).attr('src', 'images/more-button.png');
	// 	}
	// });

	$('.more').click(function() {
		$(this).siblings('.more-text').slideToggle(500);
		if ( $(this).text() == 'Show more' ) {
			$(this).text('Show less');
		}
		else {
			$(this).text('Show more');
		}
	});


		// Lightbox
	$('.lightbox1 a').magnificPopup({
		gallery: {
			enabled: true,
			tCounter: ''
		},
		type: 'image'
	});

	$('.lightbox2 a').magnificPopup({
		gallery: {
			enabled: true,
			tCounter: ''
		},
		type: 'image'
	});

});



//else hide .more-text and text content to View More

//This code parially works
	//when you click on read more, toggle the .more-text class and add '<span>Less' details and remove the Read more
	// $('.more').click(function()
	// {
	// 	//show .more-text
	// 	console.log('read more clicked');
	// 	$('.more-text').show('slow', function(){
	// 		//remove the 'read more text / link'
	// 		$('.more').remove();
	// 	});
	// });

	// //when you click on less... toggle the .more-text class
	// $('.less').click(function()
	// {
	// 	console.log("less clicked");
	// 	$('.more-text').hide('slow', function(){
	// 		$('.more').add();
	// 	});
	// });

