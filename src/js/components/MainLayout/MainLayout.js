import NotesHeader from '../NotesHeader';
import SummaryHeader from '../SummaryHeader';

const MainLayOut = () => {
  return `<div class="notes__list">
            ${NotesHeader()}
            <div class="notes__content"></div>
            <button class="create__btn" type="button">Create note</button>
          </div>
          <div class="notes__summary">
            ${SummaryHeader()}
            <div class="summary__content"></div>
          </div>`;
};

export default MainLayOut;
