export const EXPENSES_LOAD = 'EXPENSES_LOAD';
import { CATEGORY_LOAD } from '../../components/dashboard/reducers';

export const getExpenses = (state, id) => {
  if(id) return state.expensesByCategory[id]; 
  return state.expenseByCategory;
};

export const getExpensesByCategoryId = (state, id) => getExpenses(state)[id];

export function expensesByCategory(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expenses;
        return map; 
      }, {});
    default: 
      return state;
  }
}