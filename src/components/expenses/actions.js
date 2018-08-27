import expenses from '../../services/categories-data';
import shortid from 'shortid';
import { EXPENSES_LOAD, EXPENSE_ADD, EXPENSE_REMOVE, EXPENSE_UPDATE } from './reducers';

export const load = () => ({
  type: EXPENSES_LOAD,
  payload: expenses
});

export const remove = (expense) => ({
  type: EXPENSE_REMOVE,
  payload: expense
});

export const add = (expense) => {
  expense.timestamp = new Date();
  expense.id = shortid.generate();
  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};

export const update = (expense) => ({
  type: EXPENSE_UPDATE,
  payload: expense,
});