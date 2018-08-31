import { addExpense, removeExpense, updateExpense } from '../../services/budgetApi';
import { EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './reducers';


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