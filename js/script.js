document.getElementById("btn1").addEventListener("click", function() {

	var inp1 = document.getElementById("inp1").value;
	var inp2 = document.getElementById("inp2").value;
	var inp3 = document.getElementById("inp3").value;
	var inp4 = document.getElementById("inp4").value;
	var inp5 = document.getElementById("inp5").value;

	try {
		if (parseInt(inp1) == true) throw "Inp1 is not a number";
		if (eval(inp2) != false && eval(inp2) != true) throw "Inp2 is not a boolean";
		if (isNaN(inp3) == false) throw "Inp3 is not a string";
		if (inp4.length > 3) throw "Inp4 is longer than 3";
		if (inp5.length < 3) throw "Inp5 is lower than 3";
		console.log(inp1);
		console.log(inp2);
		console.log(inp3);
		console.log(inp4);
		console.log(inp5);
	} catch(e) {
		// statements
		console.log(e);
	}

}, false)