import { refs } from '../utils';
import renderActiveNotes from '../renderFunctions/renderActiveNotes';
import renderArchivedNotes from '../renderFunctions/renderArchivedNotes';

let showArchived = false;

const toggleShowArchived = () => {
  showArchived = !showArchived;
  return showArchived;
};

const onShowArchivedBtn = () => {
  const createNoteBtn = refs.createNoteBtn();
  toggleShowArchived();

  if (showArchived) {
    renderArchivedNotes();
    createNoteBtn.style = 'display: none';
  } else {
    renderActiveNotes();
    createNoteBtn.style = 'display: block';
  }
};

export default onShowArchivedBtn;
