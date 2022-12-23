const add = require('./add');
const deleteFunc = require('./delete');

describe('This is the test for checking add and remove functions', () => {
  it('adding items to the list', () => {
    const sampleArr = [];
    const sampleObj = {
      description: 'test1',
      completed: false,
      index: 0,
    };
    const result = [{ description: 'test1', completed: false, index: 0 }];
    expect(add(sampleArr, sampleObj)).toEqual(result);
  });
  it('deleting an item from the list', () => {
    const sampleIndex = 0;
    const sampleArr = [{ description: 'test1', completed: false, index: 0 }];
    const result = [];
    expect(deleteFunc(sampleIndex, sampleArr)).toEqual(result);
  });
});
