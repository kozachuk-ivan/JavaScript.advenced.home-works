function choseFirstOrLastElement(firstOrLast) {
	let parent = document.getElementById("list");
	firstOrLast === 'first' ? firstElement = parent.firstElementChild : lastElement = parent.lastElementChild;
	for(let i = 0; i < parent.children.length; i++) {
		if (parent.children[i].hasAttribute('style')) parent.children[i].removeAttribute('style');
	}
	(firstOrLast === 'first') ? firstElement.setAttribute('style', 'color:red') : lastElement.setAttribute('style', 'color:red');
}
function choseNextOrPrevElement(nextOrPrev) {
	let parent = document.getElementById("list");
	let activeChild;
	let positionOfChildrens;
	for (let i = 0; i < parent.children.length; i++) {
		if(parent.children[i].hasAttribute('style')) {
			activeChild = parent.children[i];
			if (activeChild[nextOrPrev === 'next' ? 'nextElementSibling' : 'previousElementSibling'] === null) {
				(nextOrPrev === 'next') ? parent.children[0].setAttribute('style', 'color:red') : parent['lastElementChild'].setAttribute('style', 'color:red');
				parent[nextOrPrev === 'next' ? 'lastElementChild' : 'firstElementChild'].removeAttribute('style');
			}
			positionOfChildrens = activeChild[nextOrPrev === 'next' ? 'nextElementSibling' : 'previousElementSibling'];
			positionOfChildrens.setAttribute('style', 'color:red');
			positionOfChildrens[nextOrPrev === 'next' ? 'previousElementSibling' : 'nextElementSibling'].removeAttribute('style');
			break;
		}
	}
}
function deleteElement() {
		let parent = document.getElementById('list');
		let remove = parent.lastElementChild;
		parent.removeChild(remove);
}
function addElementsInBegginOrEnd(begginOrEnd) {
	let element = document.createElement('li');
	(begginOrEnd === 'beggin') ? element.textContent = 'А я первый)))' : element.textContent = 'Уже я последний(((';
	let parent = document.getElementById('list');
	(begginOrEnd === 'beggin') ? parent.insertBefore(element, parent.children[0]) : parent.appendChild(element);
}