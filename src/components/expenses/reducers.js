export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from '../dashboard/reducers';

export const getExpenses = (state) => state.expensesByCategory; 
export const getExpensesByCategoryId = (state, id) => getExpenses(state)[id];
export const getTotalExpenses = (state, id) => getExpensesByCategoryId(state, id)
  .map(expenses => parseInt(expenses.price))
  .reduce((acc, cur) => acc + cur, 0);

export function expensesByCategory(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expenses;
        return map;
      }, {});
    case CATEGORY_ADD: {
      return {
        ...state,
        [payload.id]: []
      };
    }
    case CATEGORY_REMOVE: {
      const copy = { ...state };
      delete copy[payload];
      return copy;
    }
    case EXPENSE_ADD: {
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload
        ]
      };
    }
    case EXPENSE_UPDATE:
      return {
        ...state,
        [payload.categoryId]: state[payload.categoryId].map(expense => expense.id === payload.id ? payload : expense)
      };
    case EXPENSE_REMOVE: 
      return {
        ...state,
        [payload.categoryId]: state[payload.categoryId].filter(expense => expense.id !== payload.id)
      };
    default: 
      return state;
  }
}