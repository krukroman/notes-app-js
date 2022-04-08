import { CATEGORIES } from '../../utils';
import sprite from '../../../images/icons/sprite.svg';

const SummaryItem = data => {
  const { category, active, archived } = data;

  const insertIcon = category => {
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

  return `<li class="summary__item">
            <ul class="notes__row">
              <li class="notes__col col__icon">
                <div class="icon__wrapper">
                  <svg width="20" height="20">
                    <use href="${insertIcon(category)}"></use>
                  </svg>
                </div>
              </li>
              <li class="notes__col col__name">${category}</li>
              <li class="notes__col">${active}</li>
              <li class="notes__col">${archived}</li>
              <!-- end of notes row -->
            </ul>
          </li>`;
};

export default SummaryItem;
