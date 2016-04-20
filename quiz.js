var button = document.getElementById("submitButton");
button.addEventListener("click", handler);

var numInput = document.getElementById("num");
numInput.addEventListener("keyup", handler);

var charInput = document.getElementById("char");
charInput.addEventListener("keyup", handler);



//Checks if both values are present - Places values into Object
function handler(event) {
	event.preventDefault();
	// console.log("test", event);
	if (event.keyCode === 13 || event.type === "click") {

		if (numInput.value === "" || charInput.value === "") {
			alert("Both Fields MUST have a value!!!");
		} else {
			var number = numInput.value;
			var character = charInput.value;
			// if (number !== undefined && character !== undefined) {
			// console.log("entered number", number );
			// console.log("entered character", character );

			var treePlans = {
				rows: number,
				character: character
			}
			buildTree(treePlans);
		}
	}
}

//Takes Object treePlans and uses data to build tree
function buildTree(treePlans) {
	var number = treePlans.rows;

	for (var i = 0; i < treePlans.rows; i += 1) {
		var spaces = " ";
		var tree = "";
		if (treePlans.rows -1 > i) {
			tree += spaces.repeat(number-=1) + treePlans.character.repeat(i *2 + 1); //first
			console.log(tree);
		} else {
			console.log(tree + treePlans.character.repeat(i *2 +1)); //was 6 chars so did *2 + 1
		}
	}
}