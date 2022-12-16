export function boxChecked(box, index) {
  const information = JSON.parse(localStorage.getItem('lists')) || [];
  const lineThrough = box.nextSibling;
  lineThrough.style.textDecoration = 'line-through';

  information[index].completed = true;
  localStorage.setItem('lists', JSON.stringify(information));
}

export function unCheck(box, index) {
  const information = JSON.parse(localStorage.getItem('lists')) || [];
  const lineThrough = box.nextSibling;
  lineThrough.style.textDecoration = 'none';
  information[index].completed = false;
  localStorage.setItem('lists', JSON.stringify(information));
}

export function clear(index) {
  const information = JSON.parse(localStorage.getItem('lists')) || [];
  const isComplete = information[index].completed;
  const ulList = document.querySelector('.to-do-list');
  const liList = document.querySelectorAll('.list-item');
  if (isComplete) {
    information.splice(index, 1);
    localStorage.setItem('lists', JSON.stringify(information));
    ulList.removeChild(liList[index]);
  }
}
