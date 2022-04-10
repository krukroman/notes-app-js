import { updateNote } from '../api';
import {
  renderNotes,
  renderSummaryList,
  unmountEditor
} from '../renderFunctions';
import { getActiveNotes, getArchivedNotes } from '../utils';

const onEditSubmit = (e, note) => {
  e.preventDefault();
  const id = note.id;
  const formData = new FormData(e.currentTarget);
  const updatedNote = Object.fromEntries(formData);

  updateNote(id, updatedNote);
  unmountEditor();
  note.archived
    ? renderNotes(getArchivedNotes())
    : renderNotes(getActiveNotes());
  renderSummaryList();
};

export default onEditSubmit;
