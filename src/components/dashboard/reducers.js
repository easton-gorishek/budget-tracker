export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}