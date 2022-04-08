import { CATEGORIES } from '../../utils';
import sprite from '../../../images/icons/sprite.svg';

const NoteItem = note => {
  const { id, title, created, category, content, dates } = note;

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

  return `
            <li id="${id}" class="notes__item">
              <ul class="notes__row">
                <li class="notes__col col__icon">
                  <div class="icon__wrapper">
                    <svg width="20" height="20">
                      <use href="${insertIcon(category)}"></use>
                    </svg>
                  </div>
                </li>
                <li class="notes__col col__name">${title}</li>
                <li class="notes__col">${created}</li>
                <li class="notes__col">${category}</li>
                <li class="notes__col">${content}</li>
                <li class="notes__col">${dates}</li>
                <li class="notes__col col__actions">
                  <div class="button__group">
                    <button type="button">
                      <svg width="20" height="20">
                        <use href="${sprite}#icon-edit"></use>
                      </svg>
                    </button>
                    <button type="button">
                      <svg width="20" height="20">
                        <use
                          href="${sprite}#icon-archive-in"
                        ></use>
                      </svg>
                    </button>
                    <button type="button">
                      <svg width="20" height="20">
                        <use href="${sprite}#icon-delete"></use>
                      </svg>
                    </button>                    
                  </div>
                </li>                
              </ul>
            </li>`;
};

export default NoteItem;
