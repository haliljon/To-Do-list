function edit(listArr, index, change) {
  listArr[index] = { description: change, completed: false };
  return listArr;
}

module.exports = edit;
