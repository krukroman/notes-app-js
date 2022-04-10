import { refs } from '../utils';
import { renderNotes } from '../renderFunctions';
import { getActiveNotes, getArchivedNotes } from '../utils';

let showArchived = false;

const toggleShowArchived = () => {
  showArchived = !showArchived;
  return showArchived;
};

const onShowArchivedBtn = () => {
  const createNoteBtn = refs.createNoteBtn();
  toggleShowArchived();

  if (showArchived) {
    renderNotes(getArchivedNotes());
    createNoteBtn.style = 'display: none';
  } else {
    renderNotes(getActiveNotes());
    createNoteBtn.style = 'display: block';
  }
};

export default onShowArchivedBtn;
