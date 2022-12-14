import reload from './icons8-refresh-30.svg';
import './style.css';

const liList = document.createElement('li');
liList.className = 'list-item';
const ulList = document.querySelector('.to-do-list');
const clearBtn = document.querySelector('.clear');

const reloadImg = document.getElementById('reload');
reloadImg.src = reload;

let toDoArr = [
  {
    square: '<ion-icon class="square" name="square-outline"></ion-icon>',
    description: 'was the dishes',
    icon: "<ion-icon class='list-icon' name='ellipsis-vertical'></ion-icon>",
    completed: false,
    index: 1,
  },
  {
    square: '<ion-icon class="square" name="square-outline"></ion-icon>',
    description: 'complete To Do list project',
    icon: "<ion-icon class='list-icon' name='ellipsis-vertical'></ion-icon>",
    completed: false,
    index: 2,
  },
];

for (let i = 0; i < toDoArr.length; i += 1) {
  const liList = document.createElement('li');
  liList.className = 'list-item';
  liList.innerHTML =
    toDoArr[i].square + toDoArr[i].description + toDoArr[i].icon;
  ulList.insertBefore(liList, clearBtn);
}
