jest.mock('../../services/budgetApi', () => ({
  loadCategories: jest.fn(),
  addCategory: jest.fn(),
  removeCategory: jest.fn()
}));

import { load, add, update, remove } from './actions';
import { loadCategories, addCategory } from '../../services/budgetApi';
import { 
  CATEGORY_LOAD, 
  CATEGORY_ADD, 
  CATEGORY_UPDATE, 
  CATEGORY_REMOVE } 
  from './reducers';

describe('Budget actions', () => {

  it('Loads budget categories', () => {
    const promise = Promise.resolve();
    loadCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(loadCategories.mock.calls.length).toBe(1);
  });

  it('add a category', () => {
    const category = { name: 'coffee' };
    const promise = Promise.resolve();
    addCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(category);
    expect(type).toBe(CATEGORY_ADD);
    expect(payload).toBe(promise);
    expect(addCategory.mock.calls.length).toBe(1);
    expect(addCategory.mock.calls[0][0]).toBe(category);
  });

});