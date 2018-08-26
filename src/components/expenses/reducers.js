export const EXPENSES_LOAD = 'EXPENSES_LOAD';
import { CATEGORY_LOAD } from '../../components/dashboard/reducers';

export function expensesByCategory(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload;
    default: 
      return state;
  }
}