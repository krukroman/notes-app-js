import sprite from '../../../images/icons/sprite.svg';

const NotesHeader = () => {
  return `<div class="notes__item notes__header row">
            <div class="icon"></div>
            <div class="col">Name</div>
            <div class="col">Created</div>
            <div class="col">Category</div>
            <div class="col">Content</div>
            <div class="col">Dates</div>
            <div class="actions">
                <div class="button__group">
                <button type="button" class="archived">
                    <svg width="20" height="20">
                    <use href="${sprite}#icon-archive-in"></use>
                    </svg>
                </button>
                <button type="button">
                    <svg width="20" height="20">
                    <use href="${sprite}#icon-delete"></use>
                    </svg>
                </button>
                <!-- end of button group -->
                </div>
            </div>
          </div>`;
};

export default NotesHeader;
