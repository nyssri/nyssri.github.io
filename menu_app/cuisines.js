// 1. set the button status to unselected
// 2. create a click event that will identify when the button is clicked
// 3. when clicked, if the button status is notAdded then set the text to 'Add'
// 4. when clicked, if the button status is Added, then set the text to 'Remove'
// 5. save selected to cuisines to an object?  would need a dynamic object because won't know how many cuisines will be selected

// First jquery attempt --------
// $(document).ready(function()
//   {
//   	$('button').click(function()
//   	{
//   		if ($(this).value = "Add")
//   			{
//   				$(this).value = "Remove";
//   			}
//   		else
//   			{
//   				$(this).value = "Add";
//   			}
//   	}):
//   });

//Second jquery attempt ------
// $(document).ready(function(){
// 	$("#mexican")."click"(function()
// 		{
// 			alert.("Button clicked");
// 		}
// 	);
// });


//Javascript by ID------------

var buttonMexican = document.getElementById("mexican")
var buttonMexicanValue = buttonMexican.textContent

buttonMexican.addEventListener("click", function() { //syntax= variableName.addEventListener("eventType", function details)
	if (buttonMexicanValue === "Add")
	{
		buttonMexican.textContent = "Remove";
		buttonMexicanValue = "Remove";
	}
	else
	{
		buttonMexican.textContent = "Add";
		buttonMexicanValue = "Add";
	}
});

var buttonIndian = document.getElementById("indian")
var buttonIndianValue = buttonIndian.textContent

buttonIndian.addEventListener("click", function() { //syntax= variableName.addEventListener("eventType", function details)
	if (buttonIndianValue === "Add")
	{
		buttonIndian.textContent = "Remove";
		buttonIndianValue = "Remove";
	}
	else
	{
		buttonIndian.textContent = "Add";
		buttonIndianValue = "Add";
	}
});

var buttonItalian = document.getElementById("italian")
var buttonItalianValue = buttonItalian.textContent

buttonItalian.addEventListener("click", function() { //syntax= variableName.addEventListener("eventType", function details)
	if (buttonItalianValue === "Add")
	{
		buttonItalian.textContent = "Remove";
		buttonItalianValue = "Remove";
	}
	else
	{
		buttonItalian.textContent = "Add";
		buttonItalianValue = "Add";
	}
});




