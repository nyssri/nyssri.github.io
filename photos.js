// Lightbox logic ---
// User clicks link with class lightbox_trigger
// Prevent the browser from following the link by default
// See if the lightbox div is already inside the document
// If it exists:
// Find and the existing img tag inside the content div.
// Replace the image's src value with the href value of whatever link was clicked.
// If it doesn't exist:
// insert the lightbox markup into the page with the image's src value set to the href value of whatever link was clicked
// Allow any click on the lightbox (when displayed) to make it disappear
  
jQuery(document).ready(function($)
{
    //script goes here
    $('.lightbox_trigger').click(function(e){
        //code that makes lightbox appear
        e.preventDefault(); //prevents light box from opening in new page

        // gets the href of the image to be displayed
        var image_href = $(this).attr("href");
        if ($('#lightbox').length > 0) {//#lightbox exists
        	//insert img tag with clicked link's href as src value
        	$('#content').html('<img src="' + image_href + '" />')
        	//show lightbox window - you can use a transition here
        	$('#lightbox').show()
        }

        //handle the the case where lightbox does not exist - should only be first time clicked
        else { //#lightbox does not exist

        	//create HTML markup for lightbox window
        	var lightbox =
        	'<div id="lightbox">' + 
        		'<p>Click to close</p>' +
        		'<div id="content">' + //insert clicked link's href
        			'<img src="' + image_href +'"/>' +
        		'<div>' +
        	'<div>';

        	//insert lightbox HTML into page
        	$('body').append(lightbox);
        }
    });

	//Click anywhere on the page to get rid of lightbox window
	$('#lightbox').live('click', function() { //must use lightbox
		$('#lightbox').hide();
	});
});
    
