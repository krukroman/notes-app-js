import { getNoteId } from '../utils';
import { getById, deleteNote } from '../api';
import renderActiveNotes from '../renderFunctions/renderActiveNotes';
import renderArchivedNotes from '../renderFunctions/renderArchivedNotes';
import renderSummaryList from '../renderFunctions/renderSummary';

const onDeleteBtn = e => {
  const id = getNoteId(e);
  const note = getById(id);
  deleteNote(id);
  note.archived ? renderArchivedNotes() : renderActiveNotes();
  renderSummaryList();
};

export default onDeleteBtn;
