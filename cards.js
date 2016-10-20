var create = document.getElementById("create");
var deleteButton = document.getElementById("deleteButton");
var cardboard = document.getElementById("cardboard");
var textBox = document.getElementById("textBox");


create.addEventListener("click", function(e) {
	// create a new element and store it
	var newEl = document.createElement('div');

	// create a text node and store it
	var newText = document.createTextNode(textBox.value);

	// attach the new text node to the new element
	newEl.appendChild(newText);
	newEl.setAttribute('class', 'card');
	newEl.setAttribute('id', 'sweet');
	cardboard.appendChild(newEl);
});

deleteButton.addEventListener("click", function(e) {
	// grab the cardboard
	var startEl = document.getElementById('cardboard');

	// select the last card on the board
	var removeEl = startEl.lastChild;

	// try to remove the card from the board
	// if fails, then alert box!
	try {
		var containerEl = removeEl.parentNode;
		containerEl.removeChild(removeEl);
	} catch (e) {
		alert("You are out of cards!");
	}
});