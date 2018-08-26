import expenses from '../../services/categories-data';
import { EXPENSES_LOAD } from './reducers';


export const load = () => ({
  type: EXPENSES_LOAD,
  payload: expenses
});