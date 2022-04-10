import NoteItem from '../NoteItem';

const NoteLIst = notes => {
  return notes.map(note => NoteItem(note)).join('');
};

export default NoteLIst;
