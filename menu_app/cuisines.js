// 1. set the button status to unselected
// 2. create a click event that will identify when the button is clicked
// 3. when clicked, if the button status is notAdded then set the text to 'Add'
// 4. when clicked, if the button status is Added, then set the text to 'Remove'
// 5. save selected to cuisines to an object?  would need a dynamic object because won't know how many cuisines will be selected

// First jquery attempt --------
$(document).ready(function()
  {
  	$('.cuisine-type').on("click",function()
  	{
      var $cuisineType = $(this);
      //console.log($(this).value);
      console.log([$cuisineType.text(), this.innerHTML, $cuisineType.html()]);
  		if ($(this).text() === "I Don't Like It")
  			{
  				// $(this).value = "I Like It";
  				alert("Clicked");
  			}
  		else
  			{
  				$(this).text("I Don't Like It");
  			}
  	});
  });




//Javascript by ID------This actually works!!!------

// var buttonMexican = document.getElementById("mexican")
// var buttonMexicanValue = buttonMexican.textContent

// buttonMexican.addEventListener("click", function() { //syntax= variableName.addEventListener("eventType", function details)
// 	if (buttonMexicanValue === "I Don't Like It")
// 	{
// 		buttonMexican.textContent = "I Like It";
// 		buttonMexicanValue = "I Like It";
// 	}
// 	else
// 	{
// 		buttonMexican.textContent = "I Don't Like It";
// 		buttonMexicanValue = "I Don't Like It";
// 	}
// });

// var buttonIndian = document.getElementById("indian")
// var buttonIndianValue = buttonIndian.textContent

// buttonIndian.addEventListener("click", function(e) { //syntax= variableName.addEventListener("eventType", function details)
// 	console.log('e: ', e);
// 	if (buttonIndianValue === "I Don't Like It")
// 	{
// 		buttonIndian.textContent = "I Like It";
// 		buttonIndianValue = "I Like It";
// 	}
// 	else
// 	{
// 		buttonIndian.textContent = "I Don't Like It";
// 		buttonIndianValue = "I Don't Like It";
// 	}
// });

// var buttonItalian = document.getElementById("italian")
// var buttonItalianValue = buttonItalian.textContent

// buttonItalian.addEventListener("click", function() { //syntax= variableName.addEventListener("eventType", function details)
// 	if (buttonItalianValue === "I Don't Like It")
// 	{
// 		buttonItalian.textContent = "I Like It";
// 		buttonItalianValue = "I Like It";
// 	}
// 	else
// 	{
// 		buttonItalian.textContent = "I Don't Like It";
// 		buttonItalianValue = "I Don't Like It";
// 	}
// });

// 'e:' is a function that represents the click event.  Can use this to access innerHTML(?) poperty.  Use e.innerHTML instead 
// of button ids to identify which element is being clicked.
