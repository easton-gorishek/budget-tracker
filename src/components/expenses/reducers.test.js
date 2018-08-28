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

  it('loads expenses', () => {
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

  it.only('adds an expense ', () => {
    const expense = { 
      name: 'americano', 
      price: 3, 
      categoryId: '1' 
    };

    const categories = {
      '1':[{}]
    };

    const expected = {
      '1': [{}, expense] 
    };

    const state = expensesByCategory(categories, {
      type: EXPENSE_ADD,
      payload: expense
    });

    expect(state).toEqual(expected);
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