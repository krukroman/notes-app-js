import getNotes from './getNotes.js';

const getIndex = id => {
  let notes = getNotes();
  return notes.findIndex(note => note.id === id);
};

export default getIndex;
