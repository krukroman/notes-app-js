import getNotes from './getNotes';
import saveNotes from './saveNotes';

const addNote = note => {
  const notes = getNotes();
  notes.push(note);
  saveNotes(notes);
};

export default addNote;
