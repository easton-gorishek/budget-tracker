import {
  categories,
  CATEGORY_LOAD,
  // CATEGORY_ADD
} from './reducers';

describe('categories reducers', () => {

  it('initialize to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it.skip('loads categories', () => {
    const payload = [{}, {}, {}];

    const state = categories([], {
      type: CATEGORY_LOAD,
      payload
    });
    
    expect(state).toBe(payload);
  });
});