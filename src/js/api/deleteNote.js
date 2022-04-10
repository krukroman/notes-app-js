import getNotes from './getNotes';
import saveNotes from './saveNotes';

const deleteNote = id => {
  const notes = getNotes().filter(note => note.id !== id);
  saveNotes(notes);
};

export default deleteNote;
