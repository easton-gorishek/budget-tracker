// import expenses from '../../services/categories-data';
import { addExpense, removeExpense, updateExpense, loadCategories } from '../../services/budgetApi';
import { EXPENSES_LOAD, EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './reducers';

export const load = () => ({
  type: EXPENSES_LOAD,
  payload: loadCategories()
});

export const remove = (expense) => ({
  type: EXPENSE_REMOVE,
  payload: removeExpense(expense).then(() => expense)
});

export const add = (expense) => {
  expense.timestamp = new Date();
  return {
    type: EXPENSE_ADD,
    payload: addExpense(expense)
  };
};

export const update = (expense) => ({
  type: EXPENSE_UPDATE,
  payload: updateExpense(expense)
});