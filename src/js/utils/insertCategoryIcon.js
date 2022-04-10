import CATEGORIES from './categories';
import sprite from '../../images/icons/sprite.svg';

const insertCategoryIcon = category => {
  switch (category) {
    case CATEGORIES.IDEA:
      return `${sprite}#icon-light`;
    case CATEGORIES.QUOTE:
      return `${sprite}#icon-quote`;
    case CATEGORIES.RANDOM_THOUGHT:
      return `${sprite}#icon-thinking`;
    case CATEGORIES.TASK:
      return `${sprite}#icon-cart`;
    default:
      break;
  }
};

export default insertCategoryIcon;
