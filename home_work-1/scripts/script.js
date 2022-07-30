const giveFunctionsToButtons = {
	choseFirstElement() {
		let parent = document.getElementById("list");
		firstElement = parent.firstElementChild;
		for (let i = 0; i < parent.children.length; i++) {
			if (parent.children[i].hasAttribute('style')) {
				parent.children[i].removeAttribute('style');
			}
		}
		firstElement.style.color = 'red';
	},
	choseLastElement() {
		let parent = document.getElementById("list");
		lastElement = parent.lastElementChild;
		for (let i = 0; i < parent.children.length; i++) {
			if (parent.children[i].hasAttribute('style')) {
				parent.children[i].removeAttribute('style');
			}
		}
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
		createTag.style.cssText = `
				font-weight: 600;
				line-height: 2;
				margin-right: 20px;
		`;
		let parent = document.getElementById('list').appendChild(createTag);
		parent.previousElementSibling.innerHTML = 'Элемент списка';
		parent.previousElementSibling.style.cssText = `
				font-weight: 600;
				line-height: 2;
				margin-right: 20px;
		`;
	}, 
	deleteElement() {
		let parent = document.getElementById('list');
		let remove = parent.lastElementChild;
		parent.removeChild(remove);
	}, 
	AddElementInBeggin() {
		let element = document.createElement('li');
		element.innerHTML = 'А я первый))';
		element.style.cssText = `
				font-weight: 600;
				line-height: 2;
				margin-right: 20px;
		`;
		let parent = document.getElementById('list');
		parent.insertBefore(element, parent.children[0]);
		element = parent.children[0];
	}, 
}
