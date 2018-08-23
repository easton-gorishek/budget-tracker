import { load, add, update, remove } from './actions';
import data from '../../services/categories-data';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';

describe('Budget actions', () => {

  it('Loads budget categories', () => {
    const action = load();
    expect(action).toEqual({ type: CATEGORY_LOAD, payload: data });
  });

  it('Adds a category', () => {
    const newCategory = {
      name: 'coffee',
      budget: 300
    };
    const action = add(newCategory);
    delete action.payload.id;
    delete action.payload.timestamp;
    expect(action).toEqual({ type: CATEGORY_ADD, payload: newCategory });
  });

  it('Updates a category', () => {
    const category = {
      id: 'abc',
      name: 'bar',
      budget: 100
    };
    const action = update(category);
    expect(action).toEqual({ type: CATEGORY_UPDATE, payload: category });

  });

  it('Removes a category', () => {
    const category = {
      id: 'abc',
      name: 'bar',
      budget: 100
    };
    const action = remove(category);
    expect(action).toEqual({ type: CATEGORY_REMOVE, payload: category });
  });

});