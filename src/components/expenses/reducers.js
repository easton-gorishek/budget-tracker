export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';
import { CATEGORY_LOAD, CATEGORY_ADD } from '../../components/dashboard/reducers';

export const getExpenses = (state, id) => {
  if(id) return state.expensesByCategory[id]; 
  return state.expenseByCategory;
};

export const getExpensesByCategoryId = (state, id) => getExpenses(state)[id];

export function expensesByCategory(state = [], { type, payload }) {

  console.log('STATE', state);

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
    case EXPENSE_ADD: {
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload
        ]
      };
    }
    case EXPENSE_REMOVE: 
      return {
        ...state,
        [payload.categoryId]: state[payload.categoryId].filter(expense => expense.id !== payload.id)
      };
    default: 
      return state;
  }
}