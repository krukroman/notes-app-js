import { insertCategoryIcon } from '../../utils';
import ItemContent from '../ItemContent';

const SummaryItem = data => {
  const { category } = data;

  return `<div class="row">
            <div class="icon">
                <svg width="20" height="20">
                  <use href="${insertCategoryIcon(category)}"></use>
                </svg>
            </div>
            ${ItemContent(data)}                
            <!-- end of notes row -->
          </div>`;
};

export default SummaryItem;
