import {
  expensesByCategory,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE
} from './reducers';

import { CATEGORY_LOAD } from '../dashboard/reducers';

describe('expenses reducers', () => {

  it('initialize to empty array', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual([]);
  });

  it.only('loads expenses', () => {
    const payload = [
      {
        id: '1',
        expenses: [{}]
      },
      {
        id: '2',
        expenses: [{}]
      },
      {
        id: '3',
        expenses: [{}]
      }
    ];

    const expected = {
      '1': [{}],
      '2': [{}],
      '3': [{}]
    };

    const state = expensesByCategory({}, {
      type: CATEGORY_LOAD,
      payload
    });
    
    expect(state).toEqual(expected);
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