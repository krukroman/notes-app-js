import getNotes from './getNotes';

const getById = id => {
  const notes = getNotes();
  return notes.find(note => note.id === id);
};

export default getById;
