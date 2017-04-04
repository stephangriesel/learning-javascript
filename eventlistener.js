// go to any page, right click on element and inspect
// in developer tools you will notice the numner $0 next to element
// create variable for this element and call it from developer tools

// Type in developer tools
/* 

$0

// Result:

<h2 id=​"Description">​Description​</h2>​

// Create variable:

var descriptionElement = $0;
undefined

// Call variable

descriptionElement

// Result:

<h2 id=​"Description">​Description​</h2>​

// Handling in events in DOM
// Create event listener to log console message as soon as element is clicked

descriptionElement.addEventListener("click", function() {
	console.log("The description element was clicked!!");
	});
	
// Get event details, add event object

descriptionElement.addEventListener("click", function(event) {
	console.log(event);
	console.log("The description element was clicked!!");
	});

*/