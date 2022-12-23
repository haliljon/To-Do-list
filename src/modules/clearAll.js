function clearAll(listArr) {
  const notCompletedList = listArr.filter(function (listItem) {
    if (listItem.completed === false) {
      return true;
    }
  });
  return notCompletedList;
}

module.exports = clearAll;
