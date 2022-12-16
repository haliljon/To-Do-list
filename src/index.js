import './style.css';

import { boxChecked, unCheck, clear } from './modules.js';

const information = JSON.parse(localStorage.getItem('lists')) || [];
const liList = document.createElement('li');
liList.className = 'list-item';
const ulList = document.querySelector('.to-do-list');
const clearBtn = document.querySelector('.clear');
const clearParent = clearBtn.parentElement;
const input = document.querySelector('#input');
const inputBtn = document.querySelector('.input-btn');

class ToDoList {
  editBtn = document.querySelectorAll('.edit-btn');
  displayList() {
    for (let i = 0; i < information.length; i += 1) {
      const liList = document.createElement('li');
      liList.className = 'list-item';

      liList.innerHTML = `<input type="checkbox" class="square"/><p>${information[i].description}</p><button type="button"
      name="edit" class="edit-btn"><ion-icon class="list-icon" name="ellipsis-vertical"> </ion-icon></button><button type="button" name="delete" class="delete-btn"><ion-icon class="list-icon" name="trash-outline"></ion-icon></button>`;

      ulList.insertBefore(liList, clearParent);
      const pElement = document.querySelectorAll('.to-do-list p');
      const checkBox = document.querySelectorAll('.square');
      if (information[i].completed) {
        pElement[i].style.textDecoration = 'line-through';
        checkBox[i].setAttribute('checked', true);
      }
    }
  }

  addList() {
    const newList = {
      description: input.value,
      completed: false,
    };
    information.push(newList);
    localStorage.setItem('lists', JSON.stringify(information));
    const liList = document.createElement('li');
    liList.className = 'list-item';
    liList.innerHTML = `<input type="checkbox" class="square"/><p>${
      information[information.length - 1].description
    }</p><button type="button"
    name="edit" class="edit-btn"><ion-icon class="list-icon" name="ellipsis-vertical"> </ion-icon></button><button type="button" name="delete" class="delete-btn"><ion-icon class="list-icon" name="trash-outline"></ion-icon></button>`;
    ulList.insertBefore(liList, clearParent);
  }
  editList(edit) {
    const chosenItem = edit.previousSibling;
    chosenItem.setAttribute('contentEditable', true);
    chosenItem.focus();
    return chosenItem;
  }
}

const listCollection = new ToDoList();
listCollection.displayList();

inputBtn.addEventListener('click', (e) => {
  if (input.value !== '') {
    listCollection.addList();
    input.value = '';
  } else {
    e.preventDefault();
    alert('Please fill ot the field');
  }
  const editBtn = editBtnFun();
  const deleteBtn = document.querySelectorAll('.delete-btn');
  editBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      listCollection.editList(btn);

      editBtn[index].style.display = 'none';
      deleteBtn[index].style.display = 'block';
      const chosenItem = btn.previousSibling;
      const data = JSON.parse(localStorage.getItem('lists'));
      const listItem = document.querySelectorAll('.list-item');
      listItem[index].addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          chosenItem.setAttribute('contentEditable', false);
          const newText = chosenItem.textContent;

          data[index] = { description: newText, completed: false };
          localStorage.setItem('lists', JSON.stringify(data));
        }
      });
    });
  });
  deleteBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
      ulList.removeChild(element.parentElement);
      information.splice(index, 1);
      localStorage.setItem('lists', JSON.stringify(information));
    });
  });
  const checkBox = document.querySelectorAll('.square');
  checkBox.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (element.checked) {
        boxChecked(element, index);
      } else {
        unCheck(element, index);
      }
    });
  });
});
function editBtnFun() {
  return document.querySelectorAll('.edit-btn');
}
const editBtn = editBtnFun();

const deleteBtn = document.querySelectorAll('.delete-btn');
editBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    listCollection.editList(btn);
    editBtn[index].style.display = 'none';
    deleteBtn[index].style.display = 'block';
    const chosenItem = btn.previousSibling;
    const data = JSON.parse(localStorage.getItem('lists'));
    const listItem = document.querySelectorAll('.list-item');
    listItem[index].addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        chosenItem.setAttribute('contentEditable', false);
        const newText = chosenItem.textContent;
        data[index] = { description: newText, completed: false };
        localStorage.setItem('lists', JSON.stringify(data));
      }
    });
  });
});

deleteBtn.forEach((element, index) => {
  element.addEventListener('click', () => {
    ulList.removeChild(element.parentElement);
    information.splice(index, 1);
    localStorage.setItem('lists', JSON.stringify(information));
  });
});

// completed

const checkBox = document.querySelectorAll('.square');

checkBox.forEach((element, index) => {
  element.addEventListener('click', () => {
    if (element.checked) {
      boxChecked(element, index);
    } else {
      unCheck(element, index);
    }
  });
});

clearBtn.addEventListener('click', () => {
  for (let i = 0; i < information.length; i++) clear(i);
});

const reload = document.querySelector('#reload');
reload.addEventListener('click', () => {
  location.reload();
});
