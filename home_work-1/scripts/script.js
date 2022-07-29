const giveFunctionsToButtons = {
	choseFirstElement() {
		let parent = document.getElementById("list");
		firstElement = parent.firstChild.nextSibling;
		// parent.children[0].style.color = 'red';
		firstElement.style.color = 'red';
		console.log(firstElement);
	},
	choseLastElement() {
		let parent = document.getElementById("list");
		lastElement = parent.lastChild.previousSibling;
		lastElement.style.color = 'red';
		console.log(lastElement);
	},
	choseNextElement() {
		let parent = document.getElementById("list");
		nextElement = parent.children;
		nextElement[nextElement + 1].style.color = 'red';
		// nextElement.style.color = 'red';
		console.log(nextElement);
	},
};


