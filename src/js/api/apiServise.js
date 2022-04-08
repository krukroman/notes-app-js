const getNotes = () => loadSavedNotes();

const getIndex = id => {
  let notes = getNotes();
  return notes.findIndex(note => note.id === id);
};

const addNote = data => {
  let notes = getNotes();
  notes.push(data);
  saveNotes(notes);
};

const updateNote = (id, data) => {
  let notes = getNotes();
  let index = getIndex(id);
  notes[index] = { ...notes[index], ...data };
  saveNotes(notes);
};

const deleteNote = id => {
  let notes = getNotes().filter(note => note.id !== id);
  saveNotes(notes);
};

const handleArchive = id => {
  let notes = getNotes();
  let index = getIndex(id);
  const archiveStatus = notes[index].archived;
  notes[index] = { ...notes[index], archived: !archiveStatus };
  saveNotes(notes);
};

const saveNotes = notes => localStorage.setItem('notes', JSON.stringify(notes));

const loadSavedNotes = () => {
  if (localStorage.hasOwnProperty('notes')) {
    return JSON.parse(localStorage.getItem('notes'));
  }
  return [];
};

const API = {
  getNotes,
  addNote,
  deleteNote,
  updateNote,
  handleArchive
};

export default API;
