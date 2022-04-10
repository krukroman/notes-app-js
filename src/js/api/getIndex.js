const getIndex = (notes, id) => {
  return notes.findIndex(note => note.id === id);
};

export default getIndex;
