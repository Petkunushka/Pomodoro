import { state } from './state';

const titleElem = document.querySelector('title');
const todoListElem = document.querySelector('todo__list');

const li document.createElement('li');
li.classList.add('todo__item');

const todoAddBtn = document.createElement('button');
todoAddBtn.classList.add('todo__add');
todoAddBtn.textContent = 'Добавить новую задачу';
li.append(todoAddBtn);