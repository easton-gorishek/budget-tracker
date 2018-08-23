import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD
} from './reducers';

describe('categories reducers', () => {

  it('initialize to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads categories', () => {
    const payload = [{}, {}, {}];

    const state = categories([], {
      type: CATEGORY_LOAD,
      payload
    });
    
    expect(state).toBe(payload);
  });

  it('adds a category', () => {
    const category1 = { category: 'rent' };
    const category2 = { category: 'groceries' };
    const category3 = { category: 'bars' };

    const state = categories([category1, category2], {
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);
  });

});