function updateCompletedStatus(index, isTrue, listArr) {
  listArr[index].completed = isTrue;
  return listArr;
}

module.exports = updateCompletedStatus;
