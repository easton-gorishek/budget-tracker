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

  it('removes an expense', () => {
    const promise = Promise.resolve();
    removeExpense.mockReturnValueOnce(promise);
    const id = 123;

    const { type, payload } = remove(id);
    expect(type).toBe(EXPENSE_REMOVE);
    expect(removeExpense.mock.calls.length).toBe(1);
    expect(removeExpense.mock.calls[0][0]).toBe(id);

    return payload.then(idToDelete => {
      expect(idToDelete).toBe(id);
    });
  });

  it('update an expense', () => {
    const expense = { name: 'bar' };
    const promise = Promise.resolve();
    updateExpense.mockReturnValueOnce(promise);

    const { type, payload } = update(expense);
    expect(type).toBe(EXPENSE_UPDATE);
    expect(payload).toBe(promise);
    expect(updateExpense.mock.calls.length).toBe(1);
    expect(updateExpense.mock.calls[0][0]).toBe(expense);

  });
});