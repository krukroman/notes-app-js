import getNotes from './getNotes';
import saveNotes from './saveNotes';

const addNote = note => {
  let notes = getNotes();
  notes.push(note);
  saveNotes(notes);
};

export default addNote;
