// 1. Step on create function

function runWithDebugger(ourFunction) {
	debugger;
	ourFunction();
	}
	
// 2. Run function within function

runWithDebugger(function logTenNumbers() {
	for (var i = 0; i < 10; i++) {
		console.log(i);
	}
});