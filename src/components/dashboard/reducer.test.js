import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
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
    const category1 = { name: 'rent' };
    const category2 = { name: 'groceries' };
    const category3 = { name: 'bars' };

    const state = categories([category1, category2], {
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);
  });

  it('update a category', () => {
    const category1 = { id: '1', name: 'a' };
    const category2 = { id: '2', name: 'b' };
    const category3 = { id: '3', name: 'c' };

    const updated = { id: '3', name: 'coffee' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_UPDATE,
      payload: updated
    });

    expect(state).toEqual([
      category1,
      category2,
      updated
    ]);
  });

  it('removes a category', () => {
    const category1 = { id: '1', name: 'a' };
    const category2 = { id: '2', name: 'b' };
    const category3 = { id: '3', name: 'c' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_REMOVE,
      payload: '2'
    });

    expect(state).toEqual([
      category1,
      category3
    ]);
  });
});