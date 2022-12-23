import './style.css';
import { boxCheck } from './modules.js';
import add from './modules/add';
import deleteFunc from './modules/delete';
import edit from './modules/edit';
import clearAll from './modules/clearAll';

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
  displayList(information) {
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
    add(information, newList);
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
listCollection.displayList(information);

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
          edit(data, index, newText);
          localStorage.setItem('lists', JSON.stringify(data));
        }
      });
    });
  });
  deleteBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
      ulList.removeChild(element.parentElement);
      deleteFunc(index, information);
      localStorage.setItem('lists', JSON.stringify(information));
    });
  });
  const checkBox = document.querySelectorAll('.square');
  checkBox.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (element.checked) {
        console.log('1');
        boxCheck(index, true);
        const lineThrough = element.nextSibling;
        lineThrough.style.textDecoration = 'line-through';
      } else {
        console.log('2');
        const lineThrough = element.nextSibling;
        lineThrough.style.textDecoration = 'none';
        boxCheck(index, false);
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
    deleteFunc(index, information);
    localStorage.setItem('lists', JSON.stringify(information));
  });
});

// completed

const checkBox = document.querySelectorAll('.square');

checkBox.forEach((element, index) => {
  element.addEventListener('click', () => {
    if (element.checked) {
      console.log('1');
      boxCheck(index, true);
      const lineThrough = element.nextSibling;
      lineThrough.style.textDecoration = 'line-through';
    } else {
      console.log('2');
      const lineThrough = element.nextSibling;
      lineThrough.style.textDecoration = 'none';
      boxCheck(index, false);
    }
  });
});
clearBtn.addEventListener('click', (i) => {
  const infos = JSON.parse(localStorage.getItem('lists')) || [];
  const notCompleted = clearAll(infos);
  localStorage.setItem('lists', JSON.stringify(notCompleted));
  document.querySelectorAll('.list-item').forEach((e) => e.remove());
  listCollection.displayList(notCompleted);
  checkBox.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (element.checked) {
        console.log('1');
        boxCheck(index, true);
        const lineThrough = element.nextSibling;
        lineThrough.style.textDecoration = 'line-through';
      } else {
        console.log('2');
        const lineThrough = element.nextSibling;
        lineThrough.style.textDecoration = 'none';
        boxCheck(index, false);
      }
    });
  });
});

const reload = document.querySelector('#reload');
reload.addEventListener('click', () => {
  location.reload();
});
