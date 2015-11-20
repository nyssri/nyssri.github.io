
// 1. when user clicks on names element, save the selection to a variable
// 2. when user clicks on the jobs element, save the selection to a variable
// 3. when the user enters text into the text area, save the input into a variable
// 4. when the user clicks submit, show the values in the variable in an alert box -- this would be triggered by an click event on the submit button

var selectedName;
var selectedJob;
var enteredKeywords;

var nameList = document.getElementById("names");
var jobList = document.getElementById("jobs");
var keywordsText = document.getElementById("keywords");
var button = document.getElementById("submitButton"); //this creates a button variable for you to assign an even listener to

nameList.addEventListener("change", function(){
selectedName = nameList.value;
});

jobList.addEventListener("change", function(){
selectedJob = jobList.value;
});

keywordsText.addEventListener("change", function(){
enteredKeywords = keywordsText.value;
});
 

button.addEventListener("click", function() {
	alert("Name: "+ selectedName + "\nJob: " + selectedJob + "\nKeywords: " + enteredKeywords)
});
//on clicking of submit, display all of the users inputs for name, job, and keywords by using alert to show the values entered


