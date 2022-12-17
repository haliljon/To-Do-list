export function boxChecked(box, index) {
  const information = JSON.parse(localStorage.getItem('lists')) || [];
  const lineThrough = box.nextSibling;
  lineThrough.style.textDecoration = 'line-through';
  console.log(information);
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
