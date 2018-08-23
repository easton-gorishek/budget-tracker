import { post, get } from './request';

const URL = 'https://budget-tracker-4edae.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

// const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;

export const getCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(res => {
      return res
        ? Object.keys(res).map(key => {
          const each = res[key];
          each.key = key;
          return each;
        })
        : [];
    });
};

export const addCategory = (category) => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(res => {
      category.key = res.name;
      return category;
    });
};