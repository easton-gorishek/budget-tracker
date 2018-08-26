import expenses from '../../services/categories-data';
import shortid from 'shortid';
import { EXPENSES_LOAD, EXPENSE_ADD } from './reducers';


export const load = () => ({
  type: EXPENSES_LOAD,
  payload: expenses
});

export const add = (expense) => {
  expense.timestamp = new Date();
  expense.id = shortid.generate();
  console.log('Expense', expense);
  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};