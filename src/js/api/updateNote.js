import getNotes from './getNotes';
import getIndex from './getIndex';
import saveNotes from './saveNotes';

const updateNote = (id, data) => {
  const notes = getNotes();
  let index = getIndex(notes, id);
  notes[index] = { ...notes[index], ...data };
  saveNotes(notes);
};

export default updateNote;
