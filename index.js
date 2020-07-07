/**
 * selectors
 */

const todoInput = document.querySelector('.todo-input');
const todoSubmitBtn = document.querySelector('.todo-submit');
const todoList = document.querySelector('.todo-list');

/**
 *  icons
 */

const CHECK_MARK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="checkmark-svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24pt" height="24pt" viewBox="0 0 24 24" version="1.1">
<g id="surface6221674"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 19.980469 5.988281 C 19.71875 5.996094 19.472656 6.105469 19.292969 6.292969 L 9 16.585938 L 5.707031 13.292969 C 5.457031 13.03125 5.082031 12.925781 4.734375 13.019531 C 4.382812 13.109375 4.109375 13.382812 4.019531 13.734375 C 3.925781 14.082031 4.03125 14.457031 4.292969 14.707031 L 8.292969 18.707031 C 8.683594 19.097656 9.316406 19.097656 9.707031 18.707031 L 20.707031 7.707031 C 21.003906 7.417969 21.089844 6.980469 20.929688 6.601562 C 20.769531 6.21875 20.394531 5.976562 19.980469 5.992188 Z M 19.980469 5.988281 "/></g>
</svg>`;

const DELETE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" class="delete-svg"  xmlns:xlink="http://www.w3.org/1999/xlink" width="24pt" height="24pt" viewBox="0 0 24 24" version="1.1">
<g id="surface6666175"><path style=" stroke:none;fill-rule:nonzero;fill-opacity:1;" d="M 10 2 L 9 3 L 5 3 C 4.449219 3 4 3.449219 4 4 C 4 4.550781 4.449219 5 5 5 L 19 5 C 19.550781 5 20 4.550781 20 4 C 20 3.449219 19.550781 3 19 3 L 15 3 L 14 2 Z M 5 7 L 5 20 C 5 21.105469 5.894531 22 7 22 L 17 22 C 18.105469 22 19 21.105469 19 20 L 19 7 Z M 5 7 "/></g>
</svg>`;

/**
 * event listeners
 */

todoSubmitBtn.addEventListener('click', addTodoItem);

/*
 * functions
 */

function addTodoItem(e) {
	// prevent form from submitting
	e.preventDefault();

	/*
	 * element creation
	 */

	// create li element
	const li = document.createElement('li');
	li.classList.add('todo-item');

	//  create span element
	const span = document.createElement('span');
	span.classList.add('text');
	span.innerText = todoInput.value;

	//  create button element
	const completeBtn = document.createElement('button');
	completeBtn.classList.add('complete-btn');
	completeBtn.innerHTML = CHECK_MARK_ICON;

	//  create button element
	const deleteBtn = document.createElement('button');
	deleteBtn.classList.add('delete-btn');
	deleteBtn.innerHTML = DELETE_ICON;

	/*
	 * append elementssknd
	 */

	li.appendChild(span);
	li.appendChild(completeBtn);
	li.appendChild(deleteBtn);
	todoList.appendChild(li);
}

/**
 * Functions
 */

// function addTodo(e) {
// 	// prevent form from submitting
// 	e.preventDefault();

// 	// create div
// 	const todoDiv = document.createElement('div');
// 	todoDiv.classList.add('todo');

// 	// create li
// 	const newTodo = document.createElement('li');
// 	newTodo.innerText = todoInput.value;
// 	newTodo.classList.add('todo-item');
// 	todoDiv.appendChild(newTodo);

// 	// check mark button
// 	const completedButton = document.createElement('button');
// 	completedButton.innerHTML = '<i class="fas fa-check"></i>';
// 	completedButton.classList.add('complete-btn');
// 	todoDiv.appendChild(completedButton);

// 	// delete button
// 	const deleteButton = document.createElement('button');
// 	deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
// 	deleteButton.classList.add('delete-btn');
// 	todoDiv.appendChild(deleteButton);

// 	// append to list
// 	todoList.append(todoDiv);

// 	// clear input value
// 	todoInput.value = '';
// }

// function deleteCheck(e) {
// 	const item = e.target;

// 	// delete todo
// 	if (item.classList[0] === 'delete-btn') {
// 		const todo = item.parentElement;

// 		// animation before removing
// 		todo.classList.add('fall');
// 		todo.addEventListener('transitionend', function () {
// 			todo.remove();
// 		});
// 	}

// 	// check mark
// 	if (item.classList[0] === 'complete-btn') {
// 		const todo = item.parentElement;
// 		todo.classList.toggle('completed');
// 	}
// }

// function filterTodo(e) {
// 	const todos = todoList.childNodes;
// 	todos.forEach((todo) => {
// 		switch (e.target.value) {
// 			case 'all':
// 				todo.style.display = 'flex';
// 				break;
// 			case 'completed':
// 				if (todo.classList.contains('completed')) {
// 					todo.style.display = 'flex';
// 				} else {
// 					todo.style.display = 'none';
// 				}
// 				break;
// 			case 'uncompleted':
// 				if (!todo.classList.contains('completed')) {
// 					todo.style.display = 'flex';
// 				} else {
// 					todo.style.display = 'none';
// 				}
// 				break;
// 		}
// 	});
// }
