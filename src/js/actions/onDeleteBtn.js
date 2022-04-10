import { getNoteId } from '../utils';
import { getById, deleteNote } from '../api';
import { renderNotes, renderSummaryList } from '../renderFunctions';
import { getActiveNotes, getArchivedNotes } from '../utils';

const onDeleteBtn = e => {
  const id = getNoteId(e);
  const note = getById(id);
  deleteNote(id);
  note.archived
    ? renderNotes(getArchivedNotes())
    : renderNotes(getActiveNotes());
  renderSummaryList();
};

export default onDeleteBtn;
