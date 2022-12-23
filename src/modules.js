import updateCompletedStatus from './modules/updateStatus';

export function boxCheck(index, isTrue) {
  const information = JSON.parse(localStorage.getItem('lists')) || [];
  console.log(information);
  updateCompletedStatus(index, isTrue, information);
  localStorage.setItem('lists', JSON.stringify(information));
}
