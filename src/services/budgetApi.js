import { post, get, del, put } from './request';

const URL = 'https://budget-tracker-4edae.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;
const getExpenseUrl = key => `${CATEGORIES_URL}/${key}/expenses`;

const pivot = obj => {
  if(!obj) return [];
  return Object.keys(obj).map(key => {
    const each = obj[key];
    each.id = key;
    return each;
  });
};

export const loadCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(res => {
      const categories = pivot(res);
      categories.forEach(category => category.expenses = pivot(category.expenses));
      return categories;
    });
};

export const addCategory = (category) => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(res => {
      category.id = res.name;
      return category;
    });
};

export const updateCategory = (category) => {
  const { id, ...copy } = category;
  const url = getCategoryUrl(id);
  return put(url, copy)
    .then(res => {
      res.id = id;
      return res;
    });
};

export const removeCategory = (id) => {
  const url = getCategoryUrl(id);
  return del(url);
};

export const addExpense = (expense) => {
  const url = `${getExpenseUrl(expense.categoryId)}.json`;
  return post(url, expense)
    .then(res => {
      expense.id = res.name;
      return expense;
    });
};

export const removeExpense = (expense) => {
  const url = `${getExpenseUrl(expense.categoryId)}/${expense.id}.json`;
  return del(url);
};

export const updateExpense = (expense) => {
  const { id, ...copy } = expense;
  const url = `${getExpenseUrl(copy.categoryId)}/${id}.json`;
  return put(url, copy)
    .then(res => {
      res.id = id;
      return res;
    });
};