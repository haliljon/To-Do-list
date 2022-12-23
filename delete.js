function deleteFunc(index, listArr) {
  listArr.splice(index, 1);
  return listArr;
}
module.exports = deleteFunc;
