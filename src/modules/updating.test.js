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
});
