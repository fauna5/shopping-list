import { getList, INIT_LIST } from './list';

describe('Get list', () => {
  it('should retrieve the list', () => {
    expect(getList()).toEqual(INIT_LIST);
  });
});
