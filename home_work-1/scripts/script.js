let parent = document.getElementById("list");
function choseFirstOrLastElement(firstOrLast) {
	firstOrLast === 'first' ? firstElement = parent.firstElementChild : lastElement = parent.lastElementChild;
	for(let i = 0; i < parent.children.length; i++) {
		if (parent.children[i].hasAttribute('style')) parent.children[i].removeAttribute('style');
	}
	(firstOrLast === 'first') ? firstElement.setAttribute('style', 'color:red') : lastElement.setAttribute('style', 'color:red');
}
function choseNextOrPrevElement(nextOrPrev) {
	let activeChild;
	let positionOfChildrens;
	for (let i = 0; i < parent.children.length; i++) {
		if(parent.children[i].hasAttribute('style')) {
			activeChild = parent.children[i];
			if (activeChild[nextOrPrev === 'next' ? 'nextElementSibling' : 'previousElementSibling'] === null) {
				parent[nextOrPrev === 'next' ? 'firstElementChild' : 'lastElementChild'].setAttribute('style', 'color:red');
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
	parent.lastElementChild.remove();
}
function addElementsInBegginOrEnd(begginOrEnd) {
	let element = document.createElement('li');
	(begginOrEnd === 'beggin') ? element.textContent = 'А я первый)))' : element.textContent = 'Уже я последний(((';
	(begginOrEnd === 'beggin') ? parent.insertBefore(element, parent.children[0]) : parent.appendChild(element);
	(begginOrEnd === 'beggin') ? parent.firstElementChild.nextElementSibling.textContent = 'Элемент списка после первого' : 
	parent.lastElementChild.previousElementSibling.textContent = 'Элемент списка перед последним';
}