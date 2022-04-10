import { CATEGORIES } from '../../utils';

const CategoriesOptions = (category = '') => {
  if (category) {
    return Object.values(CATEGORIES)
      .filter(value => value !== category)
      .map(value => `<option value="${value}">${value}</option>`)
      .join('');
  }

  return Object.values(CATEGORIES)
    .map(value => `<option value="${value}">${value}</option>`)
    .join('');
};

export default CategoriesOptions;
