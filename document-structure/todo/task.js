'use strict'

const input = document.querySelector('.tasks__input');
const list = document.querySelector('.tasks__list');
const addButton = document.querySelector('.tasks__add')
 
const setTask = (e) => { 
  if (e.key === 'Enter' || e.type === 'click') {
    e.preventDefault();
	if (input.value != '') {
	list.insertAdjacentHTML("afterbegin", `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`) 
    input.value = '';
    list.querySelector('.task__remove').addEventListener('click', function() {
		this.closest('.task').remove()
		})  
	}
  }
};

input.addEventListener('keydown', setTask)
addButton.addEventListener('click', setTask)