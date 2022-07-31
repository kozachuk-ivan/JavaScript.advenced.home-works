const giveFunctionsToButtons = {
	choseFirstAndLastElementCycle(arr) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].hasAttribute('style')) {
				arr[i].removeAttribute('style');
			}
		}
	},
	choseFirstElement() {
		let parent = document.getElementById("list");
		firstElement = parent.firstElementChild;
		this.choseFirstAndLastElementCycle(parent.children);
		firstElement.style.color = 'red';
	},
	choseLastElement() {
		let parent = document.getElementById("list");
		lastElement = parent.lastElementChild;
		this.choseFirstAndLastElementCycle(parent.children);
		lastElement.style.color = 'red';
	},
	choseNextElement() {
		let parent = document.getElementById("list");
		let activeChild;
		let nextChild;
		for (let i = 0; i < parent.children.length; i++) {
			if(parent.children[i].hasAttribute('style')) {
				activeChild = parent.children[i];
				if (activeChild.nextElementSibling === null) {
					parent.children[0].style.color = 'red';
					parent.lastElementChild.removeAttribute('style');
				}
				nextChild = activeChild.nextElementSibling;
				nextChild.style.color = 'red';
				nextChild.previousElementSibling.removeAttribute('style');
				break;
			}
		}
	},
	chosePrevElement() {
		let parent = document.getElementById("list");
		let activeChild;
		let prevChild;
		for (let i = 0; i < parent.children.length; i++) {
			if(parent.children[i].hasAttribute('style')) {
				activeChild = parent.children[i];
				if (activeChild.previousElementSibling === null) {
					parent.lastElementChild.style.color = 'red';
					parent.firstElementChild.removeAttribute('style');
				}
				prevChild = activeChild.previousElementSibling;
				prevChild.style.color = 'red';
				prevChild.nextElementSibling.removeAttribute('style');
				break;
			}
		}
	},
	addElement() {
		let createTag = document.createElement('li');
		createTag.innerHTML = 'Уже этот элемент последний';
		let parent = document.getElementById('list').appendChild(createTag);
		parent.previousElementSibling.innerHTML = 'Элемент списка';
	}, 
	deleteElement() {
		let parent = document.getElementById('list');
		let remove = parent.lastElementChild;
		parent.removeChild(remove);
	}, 
	AddElementInBeggin() {
		let element = document.createElement('li');
		element.innerHTML = 'А я первый))';
		let parent = document.getElementById('list');
		parent.insertBefore(element, parent.children[0]);
		element = parent.children[0];
	}, 
};