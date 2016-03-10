/*
On page load hide all items with class 'about-me-link'
When clicking on element with id personal-link, professional-link, or tidbits show the element with id associated with it and hide the others if visible
*/

/*
Solution:
1. When the page loads hide all elements with class 'about-me-link'
2. When click on a link with id personal-link, show the element with id=personal and hide others if they are visible
	2.1 Create alternate else if scenarios if other ids are clicked
*/

// $(document).ready(function(){
// 	$("#personal-link").click(function(){
// 		console.log("clicked");
// 		$(".personal").toggle("slow");
//  	});
// }); not sure why this doesn't work but the section below does

$(document).ready(function(){
	$(".about-me-link").hide();
	$( "#btn-personal" ).click(function() {
  		$( "#personal" ).toggle( "slow" );
	});

	$( "#btn-professional" ).click(function() {
  		$( "#professional" ).toggle( "slow" );
	});

	$( "#btn-tidbits" ).click(function() {
  		$( "#tidbits" ).toggle( "slow" );
	});
});


