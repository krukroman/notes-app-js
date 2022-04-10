import { nanoid } from 'nanoid';
import { addNote } from '../api';
import {
  renderNotes,
  renderSummaryList,
  unmountEditor
} from '../renderFunctions';
import { getActiveNotes } from '../utils';

const onCreateSubmit = e => {
  e.preventDefault();
  const id = nanoid(10);
  const created = new Date();
  const formData = new FormData(e.currentTarget);
  const note = Object.fromEntries(formData);

  if (note.category === 'default') {
    alert('Choose category');
    return;
  }

  const newNote = {
    id,
    created,
    ...note,
    archived: false
  };

  addNote(newNote);
  unmountEditor();
  renderNotes(getActiveNotes());
  renderSummaryList();
};

export default onCreateSubmit;
