// 1. Create variable with student names

var students = ["jon", "jenny", "elliot"];


// 2. create function to call students name

function logName (name) {
	console.log(name);
	}

// 3. call students name, the manual way

logName (students[0])

// 4. the for loop way

for (var i = 0; i < students.length; i++) {
	logName(students[i]);
}

// 5. call array for each student which is defined in function

students.forEach(logName)

// 6. writing out entire function

students.forEach(function logName (name) {
	console.log(name);
	})
	
// 7. even shorter not write function at all and write unnamed function

students.forEach(function (name) {
	console.log(name);
	})
	
// Creating own forEach

function forEach(myArray, myFunction) {
	for(var i = 0; i < myArray.length; i++) {
		myFunction(myArray[i]);
	}
}

// 1. pass in array and function

forEach(students, function(student) {
	console.log(student);
})

// 2. can also use function defined earlier

forEach(students, logName)

// more on forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


	
	