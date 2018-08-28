jest.mock('../../services/budgetApi', () => ({
  addExpense: jest.fn(),
  removeExpense: jest.fn(),
  updateExpense: jest.fn()
}));

import { add, update, remove } from './actions';
import { addExpense, removeExpense, updateExpense } from '../../services/budgetApi';
import {  
  EXPENSE_ADD, 
  EXPENSE_UPDATE, 
  EXPENSE_REMOVE } 
  from './reducers';

describe('Expense actions', () => {

  it('add an expense', () => {
    const expense = { name: 'white mocha', price: 5 };
    const promise = Promise.resolve();
    addExpense.mockReturnValueOnce(promise);

    const { type, payload } = add(expense);
    expect(type).toBe(EXPENSE_ADD);
    expect(payload).toBe(promise);
    expect(addExpense.mock.calls.length).toBe(1);
    expect(addExpense.mock.calls[0][0]).toBe(expense);
  });

  it.skip('removes a category', () => {
    const promise = Promise.resolve();
    removeCategory.mockReturnValueOnce(promise);
    const id = 123;

    const { type, payload } = remove(id);
    expect(type).toBe(CATEGORY_REMOVE);
    expect(removeCategory.mock.calls.length).toBe(1);
    expect(removeCategory.mock.calls[0][0]).toBe(id);

    return payload.then(idToDelete => {
      expect(idToDelete).toBe(id);
    });
  });

  it.skip('updates a category', () => {
    const category = { name: 'bar' };
    const promise = Promise.resolve();
    updateCategory.mockReturnValueOnce(promise);

    const { type, payload } = update(category);
    expect(type).toBe(CATEGORY_UPDATE);
    expect(payload).toBe(promise);
    expect(updateCategory.mock.calls.length).toBe(1);
    expect(updateCategory.mock.calls[0][0]).toBe(category);

  });
});