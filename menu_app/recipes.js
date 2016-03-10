$(document).ready(function() 
{
	$('#btnRecipes').click(function()
	{
		// alert("Thanks for clicking but this is all I can do now.  Come back soon for actual recipes!");
 		var output = $.ajax(
 		{
    	url: 'GEThttps://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    	type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    	data: {}, // Additional parameters here
    	dataType: 'json',
    	success: function(data)
    		{
        	//Change data.source to data.something , where something is whichever part of the object you want returned.
        	//To see the whole object you can output it to your browser console using:
        	//console.log(data);
       		document.getElementById("output").innerHTML = data.source; 
        	},
    	error: function(err) { alert(err); },
    	beforeSend: function(xhr)
    		{
    			xhr.setRequestHeader("X-Mashape-Authorization", "QReZfsyYnxmshhUX5AlkNvIxNHKap1j5RCvjsn1vlZTEXf4Ubx"); // Enter here your Mashape key
   			}
		});	
	});
});