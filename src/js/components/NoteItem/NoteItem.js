import sprite from '../../../images/icons/sprite.svg';
import ItemContent from '../ItemContent';
import {
  insertCategoryIcon,
  transformDate,
  parseDateFromText
} from '../../utils';

const NoteItem = note => {
  const { id, name, created, category, content, archived } = note;

  const insertArchiveIcon = () => {
    return archived
      ? `${sprite}#icon-archive-out`
      : `${sprite}#icon-archive-in`;
  };

  const transformedDate = transformDate(created);

  const dates = parseDateFromText(content);

  return `<div id="${id}" class="row">
            <div class="icon">
                <svg width="20" height="20">
                  <use href="${insertCategoryIcon(category)}"></use>
                </svg>
            </div>
            ${ItemContent({
              name,
              created: transformedDate,
              category,
              content,
              dates
            })}                
            <div class="actions">
              <div class="button__group">
                <button type="button" class="edit">
                  <svg width="20" height="20">
                    <use href="${sprite}#icon-edit"></use>
                  </svg>
                </button>
                <button type="button" class="archive">
                  <svg width="20" height="20">
                    <use
                      href="${insertArchiveIcon()}"
                    ></use>
                  </svg>
                </button>
                <button type="button" class="delete">
                  <svg width="20" height="20">
                    <use href="${sprite}#icon-delete"></use>
                  </svg>
                </button>                    
              </div>
            </div>
          </div>`;
};

export default NoteItem;
