const edit = require('./edit');
const updateStatus = require('./updateStatus');
const clearAll = require('./clearAll');

describe('This is the test for editing, updating status and clearing all comleted functions', () => {
  it('test for editing function', () => {
    const listArr = [{ description: 'Sample text 1', completed: false }];
    const change = 'Sample text 2';
    const index = 0;
    const result = [{ description: 'Sample text 2', completed: false }];
    expect(edit(listArr, index, change)).toEqual(result);
  });
  it('test for updating the status of the completed tasks', () => {
    const listArr = [
      { description: 'Sample text 1', completed: false, index: 0 },
    ];
    const isTrue = true;
    const index = 0;
    const result = [
      { description: 'Sample text 1', completed: true, index: 0 },
    ];
    expect(updateStatus(index, isTrue, listArr)).toEqual(result);
  });
  it('test for clearing all the completed tasks', () => {
    const listArr = [
      { description: 'Sample text 1', completed: true, index: 0 },
      { description: 'Sample text 2', completed: false, index: 1 },
    ];
    const result = [
      { description: 'Sample text 2', completed: false, index: 1 },
    ];
    expect(clearAll(listArr)).toEqual(result);
  });
});
