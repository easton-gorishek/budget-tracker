import { post, get, del, put } from './request';

const URL = 'https://budget-tracker-4edae.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;

export const loadCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(res => res);
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